<template>
  <cds-aiskeleton-icon class="cv-aiskeleton-icon" v-bind="props">
    <slot></slot>
  </cds-aiskeleton-icon>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ai-skeleton/ai-skeleton-icon.js";
import type { CvAISkeletonIconProps } from "./CvAISkeletonIcon.ts";
const props = defineProps<CvAISkeletonIconProps>();
</script>
