<template>
  <cds-modal-footer-button class="cv-modal-footer-button" v-bind="props">
    <slot></slot>
  </cds-modal-footer-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-footer-button.js";
import type { CvModalFooterButtonProps } from "./CvModalFooterButton.ts";
const props = defineProps<CvModalFooterButtonProps>();
</script>
