<template>
  <cds-modal-close-button class="cv-modal-close-button" v-bind="props">
    <slot></slot>
  </cds-modal-close-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-close-button.js";
import type { CvModalCloseButtonProps } from "./CvModalCloseButton.ts";
const props = defineProps<CvModalCloseButtonProps>();
</script>
