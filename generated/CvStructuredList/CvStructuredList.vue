<template>
  <cds-structured-list class="cv-structured-list" v-bind="props">
    <slot></slot>
  </cds-structured-list>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list.js";
import type { CvStructuredListProps } from "./CvStructuredList.ts";
const props = defineProps<CvStructuredListProps>();
</script>
