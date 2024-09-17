<template>
  <cds-structured-list-cell class="cv-structured-list-cell" v-bind="props">
    <slot></slot>
  </cds-structured-list-cell>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-cell.js";
import type { CvStructuredListCellProps } from "./CvStructuredListCell.ts";
const props = defineProps<CvStructuredListCellProps>();
</script>
