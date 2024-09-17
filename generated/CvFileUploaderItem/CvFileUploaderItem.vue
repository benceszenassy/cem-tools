<template>
  <cds-file-uploader-item class="cv-file-uploader-item" v-bind="props">
    <template #[:validity-message]="scope">
      <slot name="validity-message" v-bind="scope" />
    </template>
    <template #[:validity-message-supplement]="scope">
      <slot name="validity-message-supplement" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-file-uploader-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/file-uploader/file-uploader-item.js";
import type { CvFileUploaderItemProps } from "./CvFileUploaderItem.ts";
const props = defineProps<CvFileUploaderItemProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventBeforeDelete", value: CustomEvent): void;
  // undefined
  (e: "eventDelete", value: CustomEvent): void;
  // The custom event fired before this file uploader item is being deleted upon a user gesture. Cancellation of this event stops the user-initiated action of deleting this file uploader item.
  (e: "cds-file-uploader-item-beingdeleted", value: undefined): void;
  // The custom event fired after this file uploader item is deleted upon a user gesture.
  (e: "cds-file-uploader-item-deleted", value: undefined): void;
}>();
const slots = defineSlots<{
  // The validity message.
  "validity-message": (scope: any) => any;
  // The supplemental validity message.
  "validity-message-supplement": (scope: any) => any;
}>();
</script>
