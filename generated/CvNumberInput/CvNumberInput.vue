<template>
  <cds-number-input class="cv-number-input" v-bind="props">
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
  </cds-number-input>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/number-input/number-input.js";
import type { CvNumberInputProps } from "./CvNumberInput.ts";
const props = defineProps<CvNumberInputProps>();

const emits = defineEmits<{
  // The name of the custom event fired after the value is changed upon a user gesture.
  (e: "cds-number-input", value: undefined): void;
  // undefined
  (e: "invalid", value: CustomEvent): void;
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
