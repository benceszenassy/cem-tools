<template>
  <cds-side-nav class="cv-side-nav" v-bind="props">
    <slot></slot>
  </cds-side-nav>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/side-nav.js";
import type { CvSideNavProps } from "./CvSideNav.ts";
const props = defineProps<CvSideNavProps>();

const emits = defineEmits<{
  // The name of the custom event fired after the header menu button in the document is toggled upon a user gesture.
  (e: "cds-header-menu-button-toggled", value: undefined): void;
}>();
</script>
