<template>
  <cds-button class="cv-button" v-bind="props">
    <slot></slot>
  </cds-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/button/button.js";
import type { CvButtonProps } from "./CvButton.ts";
const props = defineProps<CvButtonProps>();
</script>
