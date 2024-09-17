<template>
  <cds-table-header-description
    class="cv-table-header-description"
    v-bind="props"
  >
    <slot></slot>
  </cds-table-header-description>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-header-description.js";
import type { CvTableHeaderDescriptionProps } from "./CvTableHeaderDescription.ts";
const props = defineProps<CvTableHeaderDescriptionProps>();
</script>
