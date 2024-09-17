<template>
  <cds-side-nav-items class="cv-side-nav-items" v-bind="props">
    <slot></slot>
  </cds-side-nav-items>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/side-nav-items.js";
import type { CvSideNavItemsProps } from "./CvSideNavItems.ts";
const props = defineProps<CvSideNavItemsProps>();
</script>
