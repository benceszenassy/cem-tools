<template>
  <cds-modal-heading class="cv-modal-heading" v-bind="props">
    <slot></slot>
  </cds-modal-heading>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-heading.js";
import type { CvModalHeadingProps } from "./CvModalHeading.ts";
const props = defineProps<CvModalHeadingProps>();
</script>
