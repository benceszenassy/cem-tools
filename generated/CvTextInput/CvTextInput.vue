<template>
  <cds-text-input class="cv-text-input" v-bind="props">
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
  </cds-text-input>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/text-input/text-input.js";
import type { CvTextInputProps } from "./CvTextInput.ts";
const props = defineProps<CvTextInputProps>();

const emits = defineEmits<{
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
