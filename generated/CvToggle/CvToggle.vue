<template>
  <cds-toggle class="cv-toggle" v-bind="props">
    <template #[:label-text]="scope">
      <slot name="label-text" v-bind="scope" />
    </template>
    <template #[:checked-text]="scope">
      <slot name="checked-text" v-bind="scope" />
    </template>
    <template #[:unchecked-text]="scope">
      <slot name="unchecked-text" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-toggle>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/toggle/toggle.js";
import type { CvToggleProps } from "./CvToggle.ts";
const props = defineProps<CvToggleProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventChange", value: CustomEvent): void;
  // The custom event fired after this changebox changes its checked state.
  (e: "cds-toggle-changed", value: undefined): void;
  // The custom event fired after this changebox changes its checked state.
  (e: "cds-checkbox-changed", value: undefined): void;
}>();
const slots = defineSlots<{
  // The label text.
  "label-text": (scope: any) => any;
  // The text for the checked state.
  "checked-text": (scope: any) => any;
  // The text for the unchecked state.
  "unchecked-text": (scope: any) => any;
}>();
</script>
