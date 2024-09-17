<template>
  <cds-modal-footer class="cv-modal-footer" v-bind="props">
    <slot></slot>
  </cds-modal-footer>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-footer.js";
import type { CvModalFooterProps } from "./CvModalFooter.ts";
const props = defineProps<CvModalFooterProps>();
</script>
