import { generateVueWrappers } from "./wrapper-generator";
import type { Options, Params } from "./types";

export function customElementReactWrapperPlugin(options: Options = {}) {
  return {
    name: "custom-element-react-wrappers",
    packageLinkPhase({ customElementsManifest }: Params) {
      generateVueWrappers(customElementsManifest, options);
    },
  };
}
