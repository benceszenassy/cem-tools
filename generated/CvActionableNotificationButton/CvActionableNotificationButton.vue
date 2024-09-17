<template>
  <cds-actionable-notification-button
    class="cv-actionable-notification-button"
    v-bind="props"
  >
    <slot></slot>
  </cds-actionable-notification-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/notification/actionable-notification-button.js";
import type { CvActionableNotificationButtonProps } from "./CvActionableNotificationButton.ts";
const props = defineProps<CvActionableNotificationButtonProps>();
</script>
