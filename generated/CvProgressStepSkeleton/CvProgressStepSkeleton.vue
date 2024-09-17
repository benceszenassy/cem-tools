<template>
  <cds-progress-step-skeleton class="cv-progress-step-skeleton" v-bind="props">
    <slot></slot>
  </cds-progress-step-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/progress-indicator/progress-step-skeleton.js";
import type { CvProgressStepSkeletonProps } from "./CvProgressStepSkeleton.ts";
const props = defineProps<CvProgressStepSkeletonProps>();
</script>
