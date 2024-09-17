<template>
  <cds-side-panel class="cv-side-panel" v-bind="props">
    <slot></slot>
  </cds-side-panel>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/side-panel/side-panel.js";
import type { CvSidePanelProps } from "./CvSidePanel.ts";
const props = defineProps<CvSidePanelProps>();

const emits = defineEmits<{
  // The custom event fired before this side-panel is being closed upon a user gesture. Cancellation of this event stops the user-initiated action of closing this side-panel.
  (e: "cds-side-panel-beingclosed", value: undefined): void;
  // The custom event fired after this side-panel is closed upon a user gesture.
  (e: "cds-side-panel-closed", value: undefined): void;
  // custom event fired when clicking navigate back (available when step > 0)
  (e: "cds-side-panel-navigate-back", value: undefined): void;
}>();
</script>
