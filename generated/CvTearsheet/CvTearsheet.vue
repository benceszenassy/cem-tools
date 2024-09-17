<template>
  <cds-tearsheet class="cv-tearsheet" v-bind="props">
    <slot></slot>
  </cds-tearsheet>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tearsheet/tearsheet.js";
import type { CvTearsheetProps } from "./CvTearsheet.ts";
const props = defineProps<CvTearsheetProps>();

const emits = defineEmits<{
  // The custom event fired before this tearsheet is being closed upon a user gesture. Cancellation of this event stops the user-initiated action of closing this tearsheet.
  (e: "cds-tearsheet-beingclosed", value: undefined): void;
  // The custom event fired after this tearsheet is closed upon a user gesture.
  (e: "cds-tearsheet-closed", value: undefined): void;
}>();
</script>
