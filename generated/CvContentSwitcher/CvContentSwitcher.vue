<template>
  <cds-content-switcher class="cv-content-switcher" v-bind="props">
    <slot></slot>
  </cds-content-switcher>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/content-switcher/content-switcher.js";
import type { CvContentSwitcherProps } from "./CvContentSwitcher.ts";
const props = defineProps<CvContentSwitcherProps>();

const emits = defineEmits<{
  // The custom event fired before a content switcher item is selected upon a user gesture. Cancellation of this event stops changing the user-initiated selection.
  (e: "cds-content-switcher-beingselected", value: undefined): void;
  // The custom event fired after a a content switcher item is selected upon a user gesture.
  (e: "cds-content-switcher-selected", value: undefined): void;
}>();
</script>
