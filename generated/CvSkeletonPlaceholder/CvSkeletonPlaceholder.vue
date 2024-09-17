<template>
  <cds-skeleton-placeholder class="cv-skeleton-placeholder" v-bind="props">
    <slot></slot>
  </cds-skeleton-placeholder>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/skeleton-placeholder/skeleton-placeholder.js";
import type { CvSkeletonPlaceholderProps } from "./CvSkeletonPlaceholder.ts";
const props = defineProps<CvSkeletonPlaceholderProps>();
</script>
