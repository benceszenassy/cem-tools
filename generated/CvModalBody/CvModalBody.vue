<template>
  <cds-modal-body class="cv-modal-body" v-bind="props">
    <slot></slot>
  </cds-modal-body>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal-body.js";
import type { CvModalBodyProps } from "./CvModalBody.ts";
const props = defineProps<CvModalBodyProps>();
</script>
