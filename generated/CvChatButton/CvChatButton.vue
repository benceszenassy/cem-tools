<template>
  <cds-chat-button class="cv-chat-button" v-bind="props">
    <slot></slot>
  </cds-chat-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/chat-button/chat-button.js";
import type { CvChatButtonProps } from "./CvChatButton.ts";
const props = defineProps<CvChatButtonProps>();
</script>
