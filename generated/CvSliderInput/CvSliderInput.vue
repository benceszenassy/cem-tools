<template>
  <cds-slider-input class="cv-slider-input" v-bind="props">
    <slot></slot>
  </cds-slider-input>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/slider/slider-input.js";
import type { CvSliderInputProps } from "./CvSliderInput.ts";
const props = defineProps<CvSliderInputProps>();

const emits = defineEmits<{
  // The custom event fired after the value is changed by user gesture.
  (e: "cds-slider-input-changed", value: undefined): void;
}>();
</script>
