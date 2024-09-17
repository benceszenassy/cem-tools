<template>
  <cds-copy-button class="cv-copy-button" v-bind="props">
    <slot></slot>
  </cds-copy-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/copy-button/copy-button.js";
import type { CvCopyButtonProps } from "./CvCopyButton.ts";
const props = defineProps<CvCopyButtonProps>();
</script>
