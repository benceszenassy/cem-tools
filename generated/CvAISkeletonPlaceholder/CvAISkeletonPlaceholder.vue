<template>
  <cds-aiskeleton-placeholder class="cv-aiskeleton-placeholder" v-bind="props">
    <slot></slot>
  </cds-aiskeleton-placeholder>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ai-skeleton/ai-skeleton-placeholder.js";
import type { CvAISkeletonPlaceholderProps } from "./CvAISkeletonPlaceholder.ts";
const props = defineProps<CvAISkeletonPlaceholderProps>();
</script>
