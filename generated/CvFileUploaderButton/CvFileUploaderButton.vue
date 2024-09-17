<template>
  <cds-file-uploader-button class="cv-file-uploader-button" v-bind="props">
    <slot></slot>
  </cds-file-uploader-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/file-uploader/file-uploader-button.js";
import type { CvFileUploaderButtonProps } from "./CvFileUploaderButton.ts";
const props = defineProps<CvFileUploaderButtonProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventChange", value: CustomEvent): void;
  // The custom event fired when there is a user gesture to select files to upload.
  (e: "cds-file-uploader-button-changed", value: undefined): void;
}>();
</script>
