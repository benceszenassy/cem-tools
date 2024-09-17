<template>
  <cds-layer class="cv-layer" v-bind="props">
    <template #[:children]="scope">
      <slot name="children" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-layer>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/layer/layer.js";
import type { CvLayerProps } from "./CvLayer.ts";
const props = defineProps<CvLayerProps>();

const emits = defineEmits<{
  // The name of the custom event fired when the "use layer" action occurs.
  (e: "cds-use-layer", value: undefined): void;
}>();
const slots = defineSlots<{
  // The elements contained within the component.
  children: (scope: any) => any;
}>();
</script>
