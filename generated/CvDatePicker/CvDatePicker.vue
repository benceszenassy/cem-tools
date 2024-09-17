<template>
  <cds-date-picker class="cv-date-picker" v-bind="props">
    <slot></slot>
  </cds-date-picker>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/date-picker/date-picker.js";
import type { CvDatePickerProps } from "./CvDatePicker.ts";
const props = defineProps<CvDatePickerProps>();

const emits = defineEmits<{
  // The custom event fired on this element when Flatpickr updates its value.
  (e: "cds-date-picker-changed", value: undefined): void;
  // The name of the custom event when Flatpickr throws an error.
  (e: "cds-date-picker-flatpickr-error", value: undefined): void;
}>();
</script>
