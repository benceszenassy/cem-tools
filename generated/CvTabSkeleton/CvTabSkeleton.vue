<template>
  <cds-tab-skeleton class="cv-tab-skeleton" v-bind="props">
    <slot></slot>
  </cds-tab-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/tab-skeleton.js";
import type { CvTabSkeletonProps } from "./CvTabSkeleton.ts";
const props = defineProps<CvTabSkeletonProps>();
</script>
