<template>
  <cds-structured-list-header class="cv-structured-list-header" v-bind="props">
    <slot></slot>
  </cds-structured-list-header>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-head.js";
import type { CvStructuredListHeaderProps } from "./CvStructuredListHeader.ts";
const props = defineProps<CvStructuredListHeaderProps>();
</script>
