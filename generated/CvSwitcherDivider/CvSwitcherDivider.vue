<template>
  <cds-switcher-divider class="cv-switcher-divider" v-bind="props">
    <slot></slot>
  </cds-switcher-divider>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/switcher-divider.js";
import type { CvSwitcherDividerProps } from "./CvSwitcherDivider.ts";
const props = defineProps<CvSwitcherDividerProps>();
</script>
