<template>
  <cds-slider class="cv-slider" v-bind="props">
    <template #[:label-text]="scope">
      <slot name="label-text" v-bind="scope" />
    </template>
    <template #[:max-text]="scope">
      <slot name="max-text" v-bind="scope" />
    </template>
    <template #[:min-text]="scope">
      <slot name="min-text" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-slider>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/slider/slider.js";
import type { CvSliderProps } from "./CvSlider.ts";
const props = defineProps<CvSliderProps>();

const emits = defineEmits<{
  // The name of the custom event fired after the value is changed in `<cds-slider-input>` by user gesture.
  (e: "cds-slider-input-changed", value: undefined): void;
  // The custom event fired after the value is changed by user gesture.
  (e: "cds-slider-changed", value: undefined): void;
}>();
const slots = defineSlots<{
  // The label text.
  "label-text": (scope: any) => any;
  // The text for maximum value.
  "max-text": (scope: any) => any;
  // The text for minimum value.
  "min-text": (scope: any) => any;
}>();
</script>
