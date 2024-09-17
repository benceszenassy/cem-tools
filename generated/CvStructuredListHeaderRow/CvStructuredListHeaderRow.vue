<template>
  <cds-structured-list-header-row
    class="cv-structured-list-header-row"
    v-bind="props"
  >
    <slot></slot>
  </cds-structured-list-header-row>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-header-row.js";
import type { CvStructuredListHeaderRowProps } from "./CvStructuredListHeaderRow.ts";
const props = defineProps<CvStructuredListHeaderRowProps>();
</script>
