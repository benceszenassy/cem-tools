<template>
  <cds-date-picker-input-skeleton
    class="cv-date-picker-input-skeleton"
    v-bind="props"
  >
    <slot></slot>
  </cds-date-picker-input-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/date-picker/date-picker-input-skeleton.js";
import type { CvDatePickerInputSkeletonProps } from "./CvDatePickerInputSkeleton.ts";
const props = defineProps<CvDatePickerInputSkeletonProps>();
</script>
