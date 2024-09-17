<template>
  <cds-table-header-cell class="cv-table-header-cell" v-bind="props">
    <slot></slot>
  </cds-table-header-cell>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-header-cell.js";
import type { CvTableHeaderCellProps } from "./CvTableHeaderCell.ts";
const props = defineProps<CvTableHeaderCellProps>();

const emits = defineEmits<{
  // The custom event fired before a new sort direction is set upon a user gesture. Cancellation of this event stops the user-initiated change in sort direction.
  (e: "cds-table-header-cell-sort", value: undefined): void;
}>();
</script>
