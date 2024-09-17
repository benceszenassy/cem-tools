<template>
  <cds-header-side-nav-items class="cv-header-side-nav-items" v-bind="props">
    <slot></slot>
  </cds-header-side-nav-items>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-side-nav-items.js";
import type { CvHeaderSideNavItemsProps } from "./CvHeaderSideNavItems.ts";
const props = defineProps<CvHeaderSideNavItemsProps>();
</script>
