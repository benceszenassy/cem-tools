<template>
  <cds-accordion-skeleton class="cv-accordion-skeleton" v-bind="props">
    <slot></slot>
  </cds-accordion-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/accordion/accordion-skeleton.js";
import type { CvAccordionSkeletonProps } from "./CvAccordionSkeleton.ts";
const props = defineProps<CvAccordionSkeletonProps>();
</script>
