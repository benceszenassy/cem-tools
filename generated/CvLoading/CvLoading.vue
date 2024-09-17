<template>
  <cds-loading class="cv-loading" v-bind="props">
    <slot></slot>
  </cds-loading>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/loading/loading.js";
import type { CvLoadingProps } from "./CvLoading.ts";
const props = defineProps<CvLoadingProps>();
</script>
