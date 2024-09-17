<template>
  <cds-file-uploader-skeleton class="cv-file-uploader-skeleton" v-bind="props">
    <slot></slot>
  </cds-file-uploader-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/file-uploader/file-uploader-skeleton.js";
import type { CvFileUploaderSkeletonProps } from "./CvFileUploaderSkeleton.ts";
const props = defineProps<CvFileUploaderSkeletonProps>();
</script>
