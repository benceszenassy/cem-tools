<template>
  <cds-table-toolbar-content class="cv-table-toolbar-content" v-bind="props">
    <slot></slot>
  </cds-table-toolbar-content>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-toolbar-content.js";
import type { CvTableToolbarContentProps } from "./CvTableToolbarContent.ts";
const props = defineProps<CvTableToolbarContentProps>();
</script>
