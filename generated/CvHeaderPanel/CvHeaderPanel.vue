<template>
  <cds-header-panel class="cv-header-panel" v-bind="props">
    <slot></slot>
  </cds-header-panel>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-panel.js";
import type { CvHeaderPanelProps } from "./CvHeaderPanel.ts";
const props = defineProps<CvHeaderPanelProps>();
</script>
