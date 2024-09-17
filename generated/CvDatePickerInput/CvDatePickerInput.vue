<template>
  <cds-date-picker-input class="cv-date-picker-input" v-bind="props">
    <slot></slot>
  </cds-date-picker-input>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/date-picker/date-picker-input.js";
import type { CvDatePickerInputProps } from "./CvDatePickerInput.ts";
const props = defineProps<CvDatePickerInputProps>();
</script>
