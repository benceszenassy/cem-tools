<template>
  <cds-progress-bar class="cv-progress-bar" v-bind="props">
    <slot></slot>
  </cds-progress-bar>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/progress-bar/progress-bar.js";
import type { CvProgressBarProps } from "./CvProgressBar.ts";
const props = defineProps<CvProgressBarProps>();
</script>
