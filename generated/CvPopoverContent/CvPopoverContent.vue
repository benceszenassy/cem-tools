<template>
  <cds-popover-content class="cv-popover-content" v-bind="props">
    <slot></slot>
  </cds-popover-content>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/popover/popover-content.js";
import type { CvPopoverContentProps } from "./CvPopoverContent.ts";
const props = defineProps<CvPopoverContentProps>();
</script>
