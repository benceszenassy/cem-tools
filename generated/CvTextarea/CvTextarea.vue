<template>
  <cds-textarea class="cv-textarea" v-bind="props">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </cds-textarea>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/textarea/textarea.js";
import type { CvTextareaProps } from "./CvTextarea.ts";
const props = defineProps<CvTextareaProps>();

const emits = defineEmits<{
  // undefined
  (e: "invalid", value: CustomEvent): void;
}>();
const slots = defineSlots<{
  // The helper text.
  "helper-text": (scope: any) => any;
  // The label text.
  "label-text": (scope: any) => any;
  // The validity message. If present and non-empty, this input shows the UI of its invalid state.
  "validity-message": (scope: any) => any;
}>();
</script>
