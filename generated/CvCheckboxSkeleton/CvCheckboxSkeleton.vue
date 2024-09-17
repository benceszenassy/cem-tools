<template>
  <cds-checkbox-skeleton class="cv-checkbox-skeleton" v-bind="props">
    <slot></slot>
  </cds-checkbox-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/checkbox/checkbox-skeleton.js";
import type { CvCheckboxSkeletonProps } from "./CvCheckboxSkeleton.ts";
const props = defineProps<CvCheckboxSkeletonProps>();
</script>
