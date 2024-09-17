<template>
  <cds-inline-loading class="cv-inline-loading" v-bind="props">
    <slot></slot>
  </cds-inline-loading>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/inline-loading/inline-loading.js";
import type { CvInlineLoadingProps } from "./CvInlineLoading.ts";
const props = defineProps<CvInlineLoadingProps>();
</script>
