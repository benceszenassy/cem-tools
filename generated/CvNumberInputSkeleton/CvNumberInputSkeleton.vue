<template>
  <cds-number-input-skeleton class="cv-number-input-skeleton" v-bind="props">
    <slot></slot>
  </cds-number-input-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/number-input/number-input-skeleton.js";
import type { CvNumberInputSkeletonProps } from "./CvNumberInputSkeleton.ts";
const props = defineProps<CvNumberInputSkeletonProps>();
</script>
