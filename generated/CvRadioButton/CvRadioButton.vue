<template>
  <cds-radio-button class="cv-radio-button" v-bind="props">
    <slot></slot>
  </cds-radio-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/radio-button/radio-button.js";
import type { CvRadioButtonProps } from "./CvRadioButton.ts";
const props = defineProps<CvRadioButtonProps>();

const emits = defineEmits<{
  // The custom event fired after this radio button changes its checked state.
  (e: "cds-radio-button-changed", value: undefined): void;
}>();
</script>
