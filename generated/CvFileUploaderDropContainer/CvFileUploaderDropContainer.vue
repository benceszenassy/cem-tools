<template>
  <cds-file-uploader-drop-container
    class="cv-file-uploader-drop-container"
    v-bind="props"
  >
    <slot></slot>
  </cds-file-uploader-drop-container>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/file-uploader/file-uploader-drop-container.js";
import type { CvFileUploaderDropContainerProps } from "./CvFileUploaderDropContainer.ts";
const props = defineProps<CvFileUploaderDropContainerProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventChange", value: CustomEvent): void;
  // The custom event fired when there is a user gesture to select files to upload.
  (e: "cds-file-uploader-drop-container-changed", value: undefined): void;
}>();
</script>
