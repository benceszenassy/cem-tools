<template>
  <cds-switcher-item class="cv-switcher-item" v-bind="props">
    <slot></slot>
  </cds-switcher-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/switcher-item.js";
import type { CvSwitcherItemProps } from "./CvSwitcherItem.ts";
const props = defineProps<CvSwitcherItemProps>();
</script>
