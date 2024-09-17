<template>
  <cds-accordion-item-skeleton
    class="cv-accordion-item-skeleton"
    v-bind="props"
  >
    <slot></slot>
  </cds-accordion-item-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/accordion/accordion-item-skeleton.js";
import type { CvAccordionItemSkeletonProps } from "./CvAccordionItemSkeleton.ts";
const props = defineProps<CvAccordionItemSkeletonProps>();
</script>
