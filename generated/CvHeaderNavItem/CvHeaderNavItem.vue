<template>
  <cds-header-nav-item class="cv-header-nav-item" v-bind="props">
    <slot></slot>
  </cds-header-nav-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-nav-item.js";
import type { CvHeaderNavItemProps } from "./CvHeaderNavItem.ts";
const props = defineProps<CvHeaderNavItemProps>();
</script>
