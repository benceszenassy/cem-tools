<template>
  <cds-tabs class="cv-tabs" v-bind="props">
    <slot></slot>
  </cds-tabs>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/tabs.js";
import type { CvTabsProps } from "./CvTabs.ts";
const props = defineProps<CvTabsProps>();

const emits = defineEmits<{
  // The custom event fired before a tab is selected upon a user gesture. Cancellation of this event stops changing the user-initiated selection.
  (e: "cds-tabs-beingselected", value: undefined): void;
  // The custom event fired after a a tab is selected upon a user gesture.
  (e: "cds-tabs-selected", value: undefined): void;
  // The custom event fired before a content switcher item is selected upon a user gesture. Cancellation of this event stops changing the user-initiated selection.
  (e: "cds-content-switcher-beingselected", value: undefined): void;
  // The custom event fired after a a content switcher item is selected upon a user gesture.
  (e: "cds-content-switcher-selected", value: undefined): void;
}>();
</script>
