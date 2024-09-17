<template>
  <cds-progress-indicator class="cv-progress-indicator" v-bind="props">
    <slot></slot>
  </cds-progress-indicator>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/progress-indicator/progress-indicator.js";
import type { CvProgressIndicatorProps } from "./CvProgressIndicator.ts";
const props = defineProps<CvProgressIndicatorProps>();
</script>
