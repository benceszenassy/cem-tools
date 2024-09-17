<template>
  <cds-table-body class="cv-table-body" v-bind="props">
    <slot></slot>
  </cds-table-body>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-body.js";
import type { CvTableBodyProps } from "./CvTableBody.ts";
const props = defineProps<CvTableBodyProps>();
</script>
