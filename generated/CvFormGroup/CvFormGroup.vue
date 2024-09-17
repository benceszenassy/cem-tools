<template>
  <cds-form-group class="cv-form-group" v-bind="props">
    <template #[:label-title.]="scope">
      <slot name="label-title." v-bind="scope" />
    </template>
    <template #[:lebel-description.]="scope">
      <slot name="lebel-description." v-bind="scope" />
    </template>

    <slot></slot>
  </cds-form-group>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/form-group/form-group.js";
import type { CvFormGroupProps } from "./CvFormGroup.ts";
const props = defineProps<CvFormGroupProps>();

const slots = defineSlots<{
  // undefined
  "label-title.": (scope: any) => any;
  // undefined
  "lebel-description.": (scope: any) => any;
}>();
</script>
