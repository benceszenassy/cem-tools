<template>
  <cds-table-head class="cv-table-head" v-bind="props">
    <slot></slot>
  </cds-table-head>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-head.js";
import type { CvTableHeadProps } from "./CvTableHead.ts";
const props = defineProps<CvTableHeadProps>();
</script>
