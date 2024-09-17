<template>
  <cds-table-cell class="cv-table-cell" v-bind="props">
    <slot></slot>
  </cds-table-cell>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-cell.js";
import type { CvTableCellProps } from "./CvTableCell.ts";
const props = defineProps<CvTableCellProps>();
</script>
