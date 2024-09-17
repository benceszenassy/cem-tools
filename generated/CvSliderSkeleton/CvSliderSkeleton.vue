<template>
  <cds-slider-skeleton class="cv-slider-skeleton" v-bind="props">
    <slot></slot>
  </cds-slider-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/slider/slider-skeleton.js";
import type { CvSliderSkeletonProps } from "./CvSliderSkeleton.ts";
const props = defineProps<CvSliderSkeletonProps>();
</script>
