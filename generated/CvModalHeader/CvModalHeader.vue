<template>
  <cds-modal-header class="cv-modal-header" v-bind="props">
    <slot></slot>
  </cds-modal-header>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-header.js";
import type { CvModalHeaderProps } from "./CvModalHeader.ts";
const props = defineProps<CvModalHeaderProps>();
</script>
