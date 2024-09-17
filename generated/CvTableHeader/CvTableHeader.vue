<template>
  <cds-table-header class="cv-table-header" v-bind="props">
    <slot></slot>
  </cds-table-header>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-header-title.js";
import type { CvTableHeaderProps } from "./CvTableHeader.ts";
const props = defineProps<CvTableHeaderProps>();
</script>
