<template>
  <cds-skip-to-content class="cv-skip-to-content" v-bind="props">
    <slot></slot>
  </cds-skip-to-content>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/skip-to-content/skip-to-content.js";
import type { CvSkipToContentProps } from "./CvSkipToContent.ts";
const props = defineProps<CvSkipToContentProps>();
</script>
