<template>
  <cds-tabs-skeleton class="cv-tabs-skeleton" v-bind="props">
    <slot></slot>
  </cds-tabs-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/tabs-skeleton.js";
import type { CvTabsSkeletonProps } from "./CvTabsSkeleton.ts";
const props = defineProps<CvTabsSkeletonProps>();
</script>
