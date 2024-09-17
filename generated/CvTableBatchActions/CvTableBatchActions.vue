<template>
  <cds-table-batch-actions class="cv-table-batch-actions" v-bind="props">
    <slot></slot>
  </cds-table-batch-actions>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-batch-actions.js";
import type { CvTableBatchActionsProps } from "./CvTableBatchActions.ts";
const props = defineProps<CvTableBatchActionsProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventClickCancel", value: CustomEvent): void;
  // The custom event fired after the Cancel button is clicked.
  (e: "cds-table-batch-actions-cancel-clicked", value: undefined): void;
}>();
</script>
