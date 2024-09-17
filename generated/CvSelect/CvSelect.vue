<template>
  <cds-select class="cv-select" v-bind="props">
    <template #[:helper-text]="scope">
      <slot name="helper-text" v-bind="scope" />
    </template>
    <template #[:label-text]="scope">
      <slot name="label-text" v-bind="scope" />
    </template>
    <template #[:validity-message]="scope">
      <slot name="validity-message" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-select>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/select/select.js";
import type { CvSelectProps } from "./CvSelect.ts";
const props = defineProps<CvSelectProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventSelect", value: CustomEvent): void;
  // The name of the custom event fired after an item is selected.
  (e: "cds-select-selected", value: undefined): void;
}>();
const slots = defineSlots<{
  // The helper text.
  "helper-text": (scope: any) => any;
  // The label text.
  "label-text": (scope: any) => any;
  // The validity message. If present and non-empty, this input shows the UI of its invalid state.
  "validity-message": (scope: any) => any;
}>();
</script>
