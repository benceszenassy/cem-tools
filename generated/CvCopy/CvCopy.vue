<template>
  <cds-copy class="cv-copy" v-bind="props">
    <slot></slot>
  </cds-copy>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/copy/copy.js";
import type { CvCopyProps } from "./CvCopy.ts";
const props = defineProps<CvCopyProps>();
</script>
