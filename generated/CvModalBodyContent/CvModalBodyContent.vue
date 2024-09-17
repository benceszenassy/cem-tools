<template>
  <cds-modal-body-content class="cv-modal-body-content" v-bind="props">
    <slot></slot>
  </cds-modal-body-content>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-body-content.js";
import type { CvModalBodyContentProps } from "./CvModalBodyContent.ts";
const props = defineProps<CvModalBodyContentProps>();
</script>
