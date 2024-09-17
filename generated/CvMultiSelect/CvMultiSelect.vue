<template>
  <cds-multi-select class="cv-multi-select" v-bind="props">
    <slot></slot>
  </cds-multi-select>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/multi-select/multi-select.js";
import type { CvMultiSelectProps } from "./CvMultiSelect.ts";
const props = defineProps<CvMultiSelectProps>();

const emits = defineEmits<{
  // The custom event fired before a multi select item is selected upon a user gesture. Cancellation of this event stops changing the user-initiated selection.
  (e: "cds-multi-select-beingselected", value: undefined): void;
  // The custom event fired after a multi select item is selected upon a user gesture.
  (e: "cds-multi-select-selected", value: undefined): void;
  // The custom event fired before the open state of this multi select is toggled upon a user gesture. Cancellation of this event stops the user-initiated toggling.
  (e: "cds-multi-select-beingtoggled", value: undefined): void;
  // The custom event fired after the open state of this multi select is toggled upon a user gesture.
  (e: "cds-multi-select-toggled", value: undefined): void;
  // undefined
  (e: "invalid", value: CustomEvent): void;
  // undefined
  (e: "eventBeforeToggle", value: CustomEvent): void;
  // undefined
  (e: "eventToggle", value: CustomEvent): void;
  // The custom event fired before a dropdown item is selected upon a user gesture. Cancellation of this event stops changing the user-initiated selection.
  (e: "cds-dropdown-beingselected", value: undefined): void;
  // The custom event fired before the open state of this dropdown is toggled upon a user gesture. Cancellation of this event stops the user-initiated toggling.
  (e: "cds-dropdown-beingtoggled", value: undefined): void;
  // The custom event fired after a dropdown item is selected upon a user gesture.
  (e: "cds-dropdown-selected", value: undefined): void;
  // The custom event fired after the open state of this dropdown is toggled upon a user gesture.
  (e: "cds-dropdown-toggled", value: undefined): void;
}>();
</script>
