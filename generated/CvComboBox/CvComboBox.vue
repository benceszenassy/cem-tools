<template>
  <cds-combo-box class="cv-combo-box" v-bind="props">
    <slot></slot>
  </cds-combo-box>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/combo-box/combo-box.js";
import type { CvComboBoxProps } from "./CvComboBox.ts";
const props = defineProps<CvComboBoxProps>();

const emits = defineEmits<{
  // The custom event fired before a combo box item is selected upon a user gesture. Cancellation of this event stops changing the user-initiated selection.
  (e: "cds-combo-box-beingselected", value: undefined): void;
  // The custom event fired before the open state of this combo box is toggled upon a user gesture. Cancellation of this event stops the user-initiated toggling.
  (e: "cds-combo-box-beingtoggled", value: undefined): void;
  // The custom event fired after a combo box item is selected upon a user gesture.
  (e: "cds-combo-box-selected", value: undefined): void;
  // The custom event fired after the open state of this combo box is toggled upon a user gesture.
  (e: "cds-combo-box-toggled", value: undefined): void;
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
