<template>
  <cds-chat-button-skeleton class="cv-chat-button-skeleton" v-bind="props">
    <slot></slot>
  </cds-chat-button-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/chat-button/chat-button-skeleton.js";
import type { CvChatButtonSkeletonProps } from "./CvChatButtonSkeleton.ts";
const props = defineProps<CvChatButtonSkeletonProps>();
</script>
