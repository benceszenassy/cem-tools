<template>
  <cds-toggletip class="cv-toggletip" v-bind="props">
    <slot></slot>
  </cds-toggletip>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/toggle-tip/toggletip.js";
import type { CvToggletipProps } from "./CvToggletip.ts";
const props = defineProps<CvToggletipProps>();
</script>
