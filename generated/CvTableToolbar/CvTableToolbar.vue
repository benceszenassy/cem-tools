<template>
  <cds-table-toolbar class="cv-table-toolbar" v-bind="props">
    <slot></slot>
  </cds-table-toolbar>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-toolbar.js";
import type { CvTableToolbarProps } from "./CvTableToolbar.ts";
const props = defineProps<CvTableToolbarProps>();
</script>
