<template>
  <cds-textarea-skeleton class="cv-textarea-skeleton" v-bind="props">
    <slot></slot>
  </cds-textarea-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/textarea/textarea-skeleton.js";
import type { CvTextareaSkeletonProps } from "./CvTextareaSkeleton.ts";
const props = defineProps<CvTextareaSkeletonProps>();
</script>
