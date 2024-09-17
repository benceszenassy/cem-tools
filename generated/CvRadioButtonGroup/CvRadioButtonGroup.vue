<template>
  <cds-radio-button-group class="cv-radio-button-group" v-bind="props">
    <slot></slot>
  </cds-radio-button-group>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/radio-button/radio-button-group.js";
import type { CvRadioButtonGroupProps } from "./CvRadioButtonGroup.ts";
const props = defineProps<CvRadioButtonGroupProps>();

const emits = defineEmits<{
  // The custom event fired after this radio button group changes its selected item.
  (e: "cds-radio-button-group-changed", value: undefined): void;
  // The name of the custom event fired after a radio button changes its checked state.
  (e: "cds-radio-button-changed", value: undefined): void;
}>();
</script>
