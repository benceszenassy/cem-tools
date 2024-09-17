<template>
  <cds-checkbox class="cv-checkbox" v-bind="props">
    <slot></slot>
  </cds-checkbox>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/checkbox/checkbox.js";
import type { CvCheckboxProps } from "./CvCheckbox.ts";
const props = defineProps<CvCheckboxProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventChange", value: CustomEvent): void;
  // The custom event fired after this changebox changes its checked state.
  (e: "cds-checkbox-changed", value: undefined): void;
}>();
</script>
