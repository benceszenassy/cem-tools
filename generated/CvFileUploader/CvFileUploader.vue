<template>
  <cds-file-uploader class="cv-file-uploader" v-bind="props">
    <template #[:label-title.]="scope">
      <slot name="label-title." v-bind="scope" />
    </template>
    <template #[:lebel-description.]="scope">
      <slot name="lebel-description." v-bind="scope" />
    </template>

    <slot></slot>
  </cds-file-uploader>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/file-uploader/file-uploader.js";
import type { CvFileUploaderProps } from "./CvFileUploader.ts";
const props = defineProps<CvFileUploaderProps>();

const slots = defineSlots<{
  // undefined
  "label-title.": (scope: any) => any;
  // undefined
  "lebel-description.": (scope: any) => any;
}>();
</script>
