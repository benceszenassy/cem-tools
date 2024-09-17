<template>
  <cds-header-menu-button class="cv-header-menu-button" v-bind="props">
    <slot></slot>
  </cds-header-menu-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-menu-button.js";
import type { CvHeaderMenuButtonProps } from "./CvHeaderMenuButton.ts";
const props = defineProps<CvHeaderMenuButtonProps>();

const emits = defineEmits<{
  // The custom event fired after this header menu button is toggled upon a user gesture.
  (e: "cds-header-menu-button-toggled", value: undefined): void;
}>();
</script>
