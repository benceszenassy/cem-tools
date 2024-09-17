<template>
  <cds-accordion-item class="cv-accordion-item" v-bind="props">
    <slot></slot>
  </cds-accordion-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/accordion/accordion-item.js";
import type { CvAccordionItemProps } from "./CvAccordionItem.ts";
const props = defineProps<CvAccordionItemProps>();

const emits = defineEmits<{
  // The custom event fired before this accordion item is being toggled upon a user gesture. Cancellation of this event stops the user-initiated action of toggling this accordion item.
  (e: "cds-accordion-item-beingtoggled", value: undefined): void;
  // The custom event fired after this accordion item is toggled upon a user gesture.
  (e: "cds-accordion-item-toggled", value: undefined): void;
}>();
</script>
