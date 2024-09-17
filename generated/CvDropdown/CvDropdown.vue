<template>
  <cds-dropdown class="cv-dropdown" v-bind="props">
    <slot></slot>
  </cds-dropdown>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/dropdown/dropdown.js";
import type { CvDropdownProps } from "./CvDropdown.ts";
const props = defineProps<CvDropdownProps>();

const emits = defineEmits<{
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
  // undefined
  (e: "invalid", value: CustomEvent): void;
}>();
</script>
