<template>
  <cds-tooltip class="cv-tooltip" v-bind="props">
    <slot></slot>
  </cds-tooltip>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tooltip/tooltip.js";
import type { CvTooltipProps } from "./CvTooltip.ts";
const props = defineProps<CvTooltipProps>();
</script>
