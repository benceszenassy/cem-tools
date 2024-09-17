<template>
  <cds-side-nav-divider class="cv-side-nav-divider" v-bind="props">
    <slot></slot>
  </cds-side-nav-divider>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/side-nav-divider.js";
import type { CvSideNavDividerProps } from "./CvSideNavDivider.ts";
const props = defineProps<CvSideNavDividerProps>();
</script>
