<template>
  <cds-side-nav-menu-item class="cv-side-nav-menu-item" v-bind="props">
    <slot></slot>
  </cds-side-nav-menu-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/side-nav-menu-item.js";
import type { CvSideNavMenuItemProps } from "./CvSideNavMenuItem.ts";
const props = defineProps<CvSideNavMenuItemProps>();
</script>
