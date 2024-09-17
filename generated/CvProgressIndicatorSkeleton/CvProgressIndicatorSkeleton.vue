<template>
  <cds-progress-indicator-skeleton
    class="cv-progress-indicator-skeleton"
    v-bind="props"
  >
    <slot></slot>
  </cds-progress-indicator-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/progress-indicator/progress-indicator-skeleton.js";
import type { CvProgressIndicatorSkeletonProps } from "./CvProgressIndicatorSkeleton.ts";
const props = defineProps<CvProgressIndicatorSkeletonProps>();
</script>
