<template>
  <cds-structured-list-body class="cv-structured-list-body" v-bind="props">
    <slot></slot>
  </cds-structured-list-body>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/structured-list/structured-list-body.js";
import type { CvStructuredListBodyProps } from "./CvStructuredListBody.ts";
const props = defineProps<CvStructuredListBodyProps>();
</script>
