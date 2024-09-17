<template>
  <cds-structured-list-header-cell
    class="cv-structured-list-header-cell"
    v-bind="props"
  >
    <slot></slot>
  </cds-structured-list-header-cell>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-header-cell.js";
import type { CvStructuredListHeaderCellProps } from "./CvStructuredListHeaderCell.ts";
const props = defineProps<CvStructuredListHeaderCellProps>();
</script>
