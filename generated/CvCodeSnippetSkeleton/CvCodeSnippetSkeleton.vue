<template>
  <cds-code-snippet-skeleton class="cv-code-snippet-skeleton" v-bind="props">
    <slot></slot>
  </cds-code-snippet-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/code-snippet/code-snippet-skeleton.js";
import type { CvCodeSnippetSkeletonProps } from "./CvCodeSnippetSkeleton.ts";
const props = defineProps<CvCodeSnippetSkeletonProps>();
</script>
