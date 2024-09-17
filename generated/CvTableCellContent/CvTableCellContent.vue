<template>
  <cds-table-cell-content class="cv-table-cell-content" v-bind="props">
    <slot></slot>
  </cds-table-cell-content>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-cell-content.js";
import type { CvTableCellContentProps } from "./CvTableCellContent.ts";
const props = defineProps<CvTableCellContentProps>();
</script>
