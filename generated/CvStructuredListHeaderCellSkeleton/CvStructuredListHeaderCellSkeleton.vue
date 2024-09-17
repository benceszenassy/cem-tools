<template>
  <cds-structured-list-header-cell-skeleton
    class="cv-structured-list-header-cell-skeleton"
    v-bind="props"
  >
    <slot></slot>
  </cds-structured-list-header-cell-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-header-cell-skeleton.js";
import type { CvStructuredListHeaderCellSkeletonProps } from "./CvStructuredListHeaderCellSkeleton.ts";
const props = defineProps<CvStructuredListHeaderCellSkeletonProps>();
</script>
