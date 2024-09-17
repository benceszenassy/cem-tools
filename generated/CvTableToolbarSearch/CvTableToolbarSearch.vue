<template>
  <cds-table-toolbar-search class="cv-table-toolbar-search" v-bind="props">
    <slot></slot>
  </cds-table-toolbar-search>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-toolbar-search.js";
import type { CvTableToolbarSearchProps } from "./CvTableToolbarSearch.ts";
const props = defineProps<CvTableToolbarSearchProps>();

const emits = defineEmits<{
  // The custom event fired after the search content is changed upon a user gesture.
  (e: "cds-search-input", value: undefined): void;
}>();
</script>
