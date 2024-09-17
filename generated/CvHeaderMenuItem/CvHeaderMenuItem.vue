<template>
  <cds-header-menu-item class="cv-header-menu-item" v-bind="props">
    <slot></slot>
  </cds-header-menu-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-menu-item.js";
import type { CvHeaderMenuItemProps } from "./CvHeaderMenuItem.ts";
const props = defineProps<CvHeaderMenuItemProps>();
</script>
