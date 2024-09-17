<template>
  <cds-floating-menu class="cv-floating-menu" v-bind="props">
    <slot></slot>
  </cds-floating-menu>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/floating-menu/floating-menu.js";
import type { CvFloatingMenuProps } from "./CvFloatingMenu.ts";
const props = defineProps<CvFloatingMenuProps>();
</script>
