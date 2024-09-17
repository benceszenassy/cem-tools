<template>
  <cds-table class="cv-table" v-bind="props">
    <slot></slot>
  </cds-table>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table.js";
import type { CvTableProps } from "./CvTable.ts";
const props = defineProps<CvTableProps>();

const emits = defineEmits<{
  // The name of the custom event fired before a new sort direction is set upon a user gesture. Cancellation of this event stops the user-initiated change in sort direction.
  (e: "cds-table-header-cell-sort", value: undefined): void;
  // input The name of the custom event fired during search bar input
  (e: "cds-search", value: undefined): void;
  // The name of the custom event fired before header row is selected/unselected upon a user gesture.
  (e: "cds-table-change-selection-all", value: undefined): void;
  // The name of the custom event fired before a row is selected/unselected upon a user gesture.
  (e: "cds-table-row-change-selection", value: undefined): void;
  // The name of the custom event fired after the Cancel button is clicked.
  (e: "cds-table-batch-actions-cancel-clicked", value: undefined): void;
  // The name of the custom event fired after the expanded state of a row is toggled upon a user gesture.
  (e: "cds-table-row-expando-toggled", value: undefined): void;
  // The name of the custom event fired after a row has been selected.
  (e: "cds-table-row-selected", value: undefined): void;
  // The name of the custom event fired after all rows have been selected.
  (e: "cds-table-row-all-selected", value: undefined): void;
  // The name of the custom event fired after the table has been sorted.
  (e: "cds-table-sorted", value: undefined): void;
  // The name of the custom event fired after the table has been filtered containing remaining rows.
  (e: "cds-table-filtered", value: undefined): void;
}>();
</script>
