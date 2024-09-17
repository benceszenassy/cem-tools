import {
  EventName,
  MappedAttribute,
  ComponentAttributes,
  Options,
} from "./types.js";
import { RESERVED_WORDS, createEventName } from "./utils.js";
import {
  createOutDir,
  logBlue,
  logYellow,
  saveFile,
} from "../../../tools/integrations/index.js";
import {
  CEM,
  Component,
  getComponents,
} from "../../../tools/cem-utils/index.js";
import type { Attribute, ClassField } from "custom-elements-manifest";
import { toCamelCase, toKebabCase } from "../../../tools/utilities/index.js";

let config: Options = {};

export function generateVueWrappers(
  customElementsManifest: CEM,
  options: Options,
) {
  if (options.skip) {
    logYellow("[vue-wrappers] - Skipped", options.hideLogs);
    return;
  }
  logBlue("[vue-wrappers] - Generating wrappers...", options.hideLogs);

  updateConfig(options);
  const components = getComponents(customElementsManifest, config.exclude);
  createOutDir(config.outdir!);

  components.forEach((component) => {
    const events = getEventNames(component);
    const { booleanAttributes, attributes } = getAttributes(component);
    const properties = getProperties(component, attributes, booleanAttributes);

    generateVueWrapper(component, events);

    generateTypeDefinition(
      component,
      booleanAttributes,
      attributes,
      properties,
    );
  });

  generateManifests(components, config.outdir!);
  logBlue(
    `[vue-wrappers] - Generated wrappers in "${config.outdir}".`,
    config.hideLogs,
  );
}

function updateConfig(options: Options) {
  config = {
    outdir: "./vue",
    exclude: [],
    typesSrc: "types",
    attributeMapping: {},
    ...options,
  };
}

function generateVueWrapper(component: Component, events: EventName[]) {
  const result = getVueComponentTemplate(component, events);

  createOutDir(
    `${config.outdir!}/${(component.name || "noComponentNameProvided").replace(
      "CDS",
      "Cv",
    )}`,
  );
  saveFile(
    `${config.outdir!}/${(component.name || "noComponentNameProvided").replace(
      "CDS",
      "Cv",
    )}`,
    `${(component.name || "noComponentNameProvided").replace("CDS", "Cv")}.vue`,
    result,
    "vue",
  );
}

function generateTypeDefinition(
  component: Component,
  booleanAttributes: Attribute[],
  attributes: Attribute[],
  properties?: ClassField[],
) {
  const result = getTypeDefinitionTemplate(
    component,
    booleanAttributes,
    attributes,
    properties,
  );

  saveFile(
    `${config.outdir!}/${(component.name || "noComponentNameProvided").replace(
      "CDS",
      "Cv",
    )}`,
    `${(component.name || "noComponentNameProvided").replace("CDS", "Cv")}.ts`,
    result,
    "typescript",
  );
}

function generateManifests(components: Component[], outdir: string) {
  saveFile(
    outdir,
    "index.js",
    getManifestContentTemplate(components),
    "typescript",
  );
  saveFile(
    outdir,
    "index.ts",
    getManifestContentTemplate(components),
    "typescript",
  );
}

function getProperties(
  component: Component,
  attributes: MappedAttribute[],
  booleanAttributes: MappedAttribute[],
) {
  const attributeFieldNames = attributes.map((attr) => attr.fieldName);
  return component?.members?.filter(
    (member) =>
      member.kind === "field" &&
      !member.static &&
      member.privacy !== "private" &&
      member.privacy !== "protected" &&
      !attributeFieldNames.includes(member.name) &&
      (member.description || member.deprecated) &&
      !booleanAttributes.find((x) => x.propName === member.name) &&
      !attributes.find((x) => x.propName === member.name),
  ) as ClassField[];
}

function getEventNames(component: Component): EventName[] {
  return (
    component?.events
      ?.filter((event) => event.name)
      .map((event) => {
        return {
          name: event.name,
          vueName: createEventName(event.name),
          description: event.description,
          type: event.type?.text,
        };
      }) || []
  );
}

function getAttributes(component: Component): ComponentAttributes {
  const result: {
    attributes: MappedAttribute[];
    booleanAttributes: MappedAttribute[];
  } = {
    attributes: [],
    booleanAttributes: [],
  };

  component?.attributes?.forEach((attr) => {
    if (!attr?.name) {
      return;
    }

    /** Handle reserved keyword attributes */
    if (RESERVED_WORDS.includes(attr?.name)) {
      /** If we have a user-specified mapping, rename */
      if (attr.name in config.attributeMapping!) {
        const attribute = getMappedAttribute(attr);
        addAttribute(attribute, result);
        return;
      }
      throwKeywordException(attr, component);
    }

    addAttribute(attr as MappedAttribute, result);
  });

  return result;
}

function throwKeywordException(attr: Attribute, component: Component) {
  throw new Error(
    `Attribute \`${attr.name}\` in custom element \`${component.name}\` is a reserved keyword and cannot be used. Please provide an \`attributeMapping\` in the plugin options to rename the JavaScript variable that gets passed to the attribute.`,
  );
}

function addAttribute(
  attribute: MappedAttribute,
  componentAttributes: ComponentAttributes,
) {
  const existingAttr = componentAttributes.attributes.find(
    (x) => x.name === attribute.name,
  );
  const existingBool = componentAttributes.booleanAttributes.find(
    (x) => x.name === attribute.name,
  );

  if (existingAttr || existingBool) {
    return;
  }

  attribute.propName = toCamelCase(attribute.name);

  if (attribute?.type?.text.includes("boolean")) {
    componentAttributes.booleanAttributes.push(attribute);
  } else {
    componentAttributes.attributes.push(attribute);
  }
}

function getMappedAttribute(attr: Attribute): MappedAttribute {
  return {
    ...attr,
    originalName: attr.name,
    name: config.attributeMapping![attr.name],
  };
}

function getVueComponentTemplate(component: Component, events: EventName[]) {
  const _componentName = component.name || "noComponentNameProvided";
  // CDS prefix not trigger kebabcase
  const tagName = toKebabCase(_componentName).replace(/^cds/, "cds-");
  const componentClassName = tagName.replace("cds", "cv");
  const cvComponentName = _componentName.replace("CDS", "Cv");
  const componentPropsName = `${cvComponentName}Props`;

  const componentSlots = component.slots ?? [];

  return `
    <template>
      <${tagName} class="${componentClassName}" v-bind="props">
      ${componentSlots
        .map(
          (slot) => `<template #[:${slot.name}]="scope">
                    <slot name="${slot.name}" v-bind="scope" />
                  </template>\n`,
        )
        .join("")}
      <slot></slot>
      </${tagName}>
    </template>

    <script setup lang="ts">
    import '@carbon/web-components/es/${component.path?.replace("src/", "").replace(".ts", ".js")}';
    import type { ${componentPropsName} } from './${cvComponentName}.ts';
    const props = defineProps<${componentPropsName}>()

    ${
      events.length
        ? `const emits = defineEmits<{
      ${events
        .map(
          (event) =>
            `// ${event.description}\n(e: '${event.name}', value: ${event.type}): void`,
        )
        .join(",\n")}
    }>()`
        : ""
    }
    ${
      componentSlots.length
        ? `const slots = defineSlots<{
      ${componentSlots
        .map(
          (slot) =>
            `// ${slot.description}\n'${slot.name}': (scope: any) => any`,
        )
        .join(",\n")}
    }>()`
        : ""
    }
    </script>
    `;
}

function getTypeDefinitionTemplate(
  component: Component,
  booleanAttributes: Attribute[],
  attributes: Attribute[],
  properties?: ClassField[],
) {
  const props = getPropsInterface(booleanAttributes, attributes, properties);

  return `
    export type ${(component.name || "noComponentNameProvided").replace(
      "CDS",
      "Cv",
    )}Props = ${props.length ? `{\n${props}\n}` : "{}"}
  `;
}

function getPropsInterface(
  booleanAttributes: MappedAttribute[],
  attributes: MappedAttribute[],
  properties?: ClassField[],
) {
  return [
    ...getBooleanPropsTemplate(booleanAttributes),
    ...getAttributePropsTemplate(attributes),
    ...getPropertyPropsTemplate(properties),
  ]?.join("");
}

function getBooleanPropsTemplate(booleanAttributes: MappedAttribute[]) {
  return (
    booleanAttributes?.map(
      (attr) => `
      /** ${attr.description} */
      ${attr?.propName}?: ${attr?.type?.text || "boolean"};
    `,
    ) || []
  );
}

function getAttributePropsTemplate(attributes: MappedAttribute[]) {
  return (attributes || []).map(
    (attr) => `
      /** ${attr.description} */
      ${attr.propName}?: ${attr.type?.text || "string"};
    `,
  );
}

function getPropertyPropsTemplate(properties: ClassField[] | undefined) {
  return [...(properties || []), ...(config.globalProps || [])]?.map((prop) => {
    if (
      prop.type?.text &&
      !["boolean", "number", "undefined"].includes(prop.type.text)
    ) {
      // console.log("prop.type is not valid", prop.name, prop.type?.text);
    }
    return `
    /** ${prop.description} */
    ${prop.name}?: ${prop.type?.text || "string"};
  `;
  });
}

function getManifestContentTemplate(components: Component[]) {
  const exports = components
    .map((component) => {
      const componentName = (
        component.name || "noComponentNameProvided"
      ).replace("CDS", "Cv");
      return `export * from './${componentName}/${componentName}.ts';`;
    })
    .join("");

  return exports;
}
