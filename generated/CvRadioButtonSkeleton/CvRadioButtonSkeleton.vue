<template>
  <cds-radio-button-skeleton class="cv-radio-button-skeleton" v-bind="props">
    <slot></slot>
  </cds-radio-button-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/radio-button/radio-button-skeleton.js";
import type { CvRadioButtonSkeletonProps } from "./CvRadioButtonSkeleton.ts";
const props = defineProps<CvRadioButtonSkeletonProps>();
</script>
