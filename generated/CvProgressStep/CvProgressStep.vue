<template>
  <cds-progress-step class="cv-progress-step" v-bind="props">
    <template #[:secondary-label-text]="scope">
      <slot name="secondary-label-text" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-progress-step>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/progress-indicator/progress-step.js";
import type { CvProgressStepProps } from "./CvProgressStep.ts";
const props = defineProps<CvProgressStepProps>();

const slots = defineSlots<{
  // The secondary progress label.
  "secondary-label-text": (scope: any) => any;
}>();
</script>
