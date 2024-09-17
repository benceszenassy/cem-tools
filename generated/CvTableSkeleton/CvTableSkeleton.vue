<template>
  <cds-table-skeleton class="cv-table-skeleton" v-bind="props">
    <slot></slot>
  </cds-table-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-skeleton.js";
import type { CvTableSkeletonProps } from "./CvTableSkeleton.ts";
const props = defineProps<CvTableSkeletonProps>();
</script>
