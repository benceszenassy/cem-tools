<template>
  <cds-table-row class="cv-table-row" v-bind="props">
    <slot></slot>
  </cds-table-row>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-row.js";
import type { CvTableRowProps } from "./CvTableRow.ts";
const props = defineProps<CvTableRowProps>();

const emits = defineEmits<{
  // The custom event fired before this row is selected/unselected upon a user gesture. Cancellation of this event stops the user-initiated change in selection.
  (e: "cds-table-row-change-selection", value: undefined): void;
  // The name of the custom event fired after this radio button changes its checked state.
  (e: "cds-radio-button-changed", value: undefined): void;
  // The name of the custom event fired after this checkbox changes its checked state.
  (e: "cds-checkbox-changed", value: undefined): void;
  // The name of the custom event fired before the expanded state of this row is being toggled upon a user gesture. Cancellation of this event stops the user-initiated action of toggling the expanded state.
  (e: "cds-table-row-expando-beingtoggled", value: undefined): void;
  // The name of the custom event fired after the expanded state of this row is toggled upon a user gesture.
  (e: "cds-table-row-expando-toggled", value: undefined): void;
}>();
</script>
