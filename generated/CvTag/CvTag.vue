<template>
  <cds-tag class="cv-tag" v-bind="props">
    <slot></slot>
  </cds-tag>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tag/tag.js";
import type { CvTagProps } from "./CvTag.ts";
const props = defineProps<CvTagProps>();

const emits = defineEmits<{
  // The custom event fired as the element is being closed
  (e: "cds-tag-beingclosed", value: undefined): void;
  // The custom event fired after the element has been closed
  (e: "cds-tag-closed", value: undefined): void;
}>();
</script>
