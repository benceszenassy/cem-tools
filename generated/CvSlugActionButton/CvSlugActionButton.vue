<template>
  <cds-slug-action-button class="cv-slug-action-button" v-bind="props">
    <slot></slot>
  </cds-slug-action-button>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/slug/slug-action-button.js";
import type { CvSlugActionButtonProps } from "./CvSlugActionButton.ts";
const props = defineProps<CvSlugActionButtonProps>();
</script>
