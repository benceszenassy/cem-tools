<template>
  <cds-overflow-menu-item class="cv-overflow-menu-item" v-bind="props">
    <slot></slot>
  </cds-overflow-menu-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/overflow-menu/overflow-menu-item.js";
import type { CvOverflowMenuItemProps } from "./CvOverflowMenuItem.ts";
const props = defineProps<CvOverflowMenuItemProps>();
</script>
