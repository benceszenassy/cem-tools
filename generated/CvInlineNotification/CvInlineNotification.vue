<template>
  <cds-inline-notification class="cv-inline-notification" v-bind="props">
    <template #[:subtitle]="scope">
      <slot name="subtitle" v-bind="scope" />
    </template>
    <template #[:title]="scope">
      <slot name="title" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-inline-notification>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/notification/inline-notification.js";
import type { CvInlineNotificationProps } from "./CvInlineNotification.ts";
const props = defineProps<CvInlineNotificationProps>();

const emits = defineEmits<{
  // The custom event fired before this notification is being closed upon a user gesture. Cancellation of this event stops the user-initiated action of closing this notification.
  (e: "cds-notification-beingclosed", value: undefined): void;
  // The custom event fired after this notification is closed upon a user gesture.
  (e: "cds-notification-closed", value: undefined): void;
}>();
const slots = defineSlots<{
  // The subtitle.
  subtitle: (scope: any) => any;
  // The title.
  title: (scope: any) => any;
}>();
</script>
