<template>
  <cds-search class="cv-search" v-bind="props">
    <slot></slot>
  </cds-search>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/search/search.js";
import type { CvSearchProps } from "./CvSearch.ts";
const props = defineProps<CvSearchProps>();

const emits = defineEmits<{
  // The custom event fired after the search content is changed upon a user gesture.
  (e: "cds-search-input", value: undefined): void;
}>();
</script>
