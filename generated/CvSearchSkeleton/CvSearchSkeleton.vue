<template>
  <cds-search-skeleton class="cv-search-skeleton" v-bind="props">
    <slot></slot>
  </cds-search-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/search/search-skeleton.js";
import type { CvSearchSkeletonProps } from "./CvSearchSkeleton.ts";
const props = defineProps<CvSearchSkeletonProps>();
</script>
