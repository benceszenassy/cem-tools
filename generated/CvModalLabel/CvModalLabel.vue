<template>
  <cds-modal-label class="cv-modal-label" v-bind="props">
    <slot></slot>
  </cds-modal-label>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-label.js";
import type { CvModalLabelProps } from "./CvModalLabel.ts";
const props = defineProps<CvModalLabelProps>();
</script>
