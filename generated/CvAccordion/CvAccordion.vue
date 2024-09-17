<template>
  <cds-accordion class="cv-accordion" v-bind="props">
    <slot></slot>
  </cds-accordion>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/accordion/accordion.js";
import type { CvAccordionProps } from "./CvAccordion.ts";
const props = defineProps<CvAccordionProps>();
</script>
