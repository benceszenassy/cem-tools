<template>
  <cds-aiskeleton-text class="cv-aiskeleton-text" v-bind="props">
    <slot></slot>
  </cds-aiskeleton-text>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ai-skeleton/ai-skeleton-text.js";
import type { CvAISkeletonTextProps } from "./CvAISkeletonText.ts";
const props = defineProps<CvAISkeletonTextProps>();
</script>
