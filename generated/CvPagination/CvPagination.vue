<template>
  <cds-pagination class="cv-pagination" v-bind="props">
    <template #[:page-sizes-select]="scope">
      <slot name="page-sizes-select" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-pagination>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/pagination/pagination.js";
import type { CvPaginationProps } from "./CvPagination.ts";
const props = defineProps<CvPaginationProps>();

const emits = defineEmits<{
  // The custom event fired after the current page is changed from `<cds-pages-select>`.
  (e: "cds-pages-select-changed", value: undefined): void;
  // The custom event fired after the number of rows per page is changed from `<cds-page-sizes-select>`.
  (e: "cds-page-sizes-select-changed", value: undefined): void;
}>();
const slots = defineSlots<{
  // Where to put in the `<page-sizes-select>`.
  "page-sizes-select": (scope: any) => any;
}>();
</script>
