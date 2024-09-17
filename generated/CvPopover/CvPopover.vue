<template>
  <cds-popover class="cv-popover" v-bind="props">
    <slot></slot>
  </cds-popover>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/popover/popover.js";
import type { CvPopoverProps } from "./CvPopover.ts";
const props = defineProps<CvPopoverProps>();
</script>
