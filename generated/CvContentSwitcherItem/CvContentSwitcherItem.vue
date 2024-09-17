<template>
  <cds-content-switcher-item class="cv-content-switcher-item" v-bind="props">
    <slot></slot>
  </cds-content-switcher-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/content-switcher/content-switcher-item.js";
import type { CvContentSwitcherItemProps } from "./CvContentSwitcherItem.ts";
const props = defineProps<CvContentSwitcherItemProps>();
</script>
