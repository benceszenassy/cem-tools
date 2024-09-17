<template>
  <cds-checkbox-group class="cv-checkbox-group" v-bind="props">
    <slot></slot>
  </cds-checkbox-group>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/checkbox/checkbox-group.js";
import type { CvCheckboxGroupProps } from "./CvCheckboxGroup.ts";
const props = defineProps<CvCheckboxGroupProps>();

const emits = defineEmits<{
  // The custom event fired after this changebox changes its checked state.
  (e: "cds-checkbox-changed", value: undefined): void;
}>();
</script>
