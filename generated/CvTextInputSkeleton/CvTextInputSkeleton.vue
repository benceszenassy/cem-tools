<template>
  <cds-text-input-skeleton class="cv-text-input-skeleton" v-bind="props">
    <slot></slot>
  </cds-text-input-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/text-input/text-input-skeleton.js";
import type { CvTextInputSkeletonProps } from "./CvTextInputSkeleton.ts";
const props = defineProps<CvTextInputSkeletonProps>();
</script>
