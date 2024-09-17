<template>
  <cds-skeleton-text class="cv-skeleton-text" v-bind="props">
    <slot></slot>
  </cds-skeleton-text>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/skeleton-text/skeleton-text.js";
import type { CvSkeletonTextProps } from "./CvSkeletonText.ts";
const props = defineProps<CvSkeletonTextProps>();
</script>
