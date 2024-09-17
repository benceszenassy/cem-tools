<template>
  <cds-modal class="cv-modal" v-bind="props">
    <slot></slot>
  </cds-modal>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/modal/modal.js";
import type { CvModalProps } from "./CvModal.ts";
const props = defineProps<CvModalProps>();

const emits = defineEmits<{
  // The custom event fired before this modal is being closed upon a user gesture. Cancellation of this event stops the user-initiated action of closing this modal.
  (e: "cds-modal-beingclosed", value: undefined): void;
  // The custom event fired after this modal is closed upon a user gesture.
  (e: "cds-modal-closed", value: undefined): void;
}>();
</script>
