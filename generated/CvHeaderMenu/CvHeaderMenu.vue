<template>
  <cds-header-menu class="cv-header-menu" v-bind="props">
    <slot></slot>
  </cds-header-menu>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-menu.js";
import type { CvHeaderMenuProps } from "./CvHeaderMenu.ts";
const props = defineProps<CvHeaderMenuProps>();
</script>
