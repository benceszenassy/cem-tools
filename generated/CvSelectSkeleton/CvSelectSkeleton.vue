<template>
  <cds-select-skeleton class="cv-select-skeleton" v-bind="props">
    <slot></slot>
  </cds-select-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/select/select-skeleton.js";
import type { CvSelectSkeletonProps } from "./CvSelectSkeleton.ts";
const props = defineProps<CvSelectSkeletonProps>();
</script>
