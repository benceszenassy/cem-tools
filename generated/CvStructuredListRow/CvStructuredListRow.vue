<template>
  <cds-structured-list-row class="cv-structured-list-row" v-bind="props">
    <slot></slot>
  </cds-structured-list-row>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-row.js";
import type { CvStructuredListRowProps } from "./CvStructuredListRow.ts";
const props = defineProps<CvStructuredListRowProps>();
</script>
