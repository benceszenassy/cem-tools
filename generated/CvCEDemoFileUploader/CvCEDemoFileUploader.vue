<template>
  <cds-cedemo-file-uploader class="cv-cedemo-file-uploader" v-bind="props">
    <slot></slot>
  </cds-cedemo-file-uploader>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/file-uploader/demo-file-uploader.js";
import type { CvCEDemoFileUploaderProps } from "./CvCEDemoFileUploader.ts";
const props = defineProps<CvCEDemoFileUploaderProps>();
</script>
