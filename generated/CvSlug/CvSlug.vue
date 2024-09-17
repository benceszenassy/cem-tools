<template>
  <cds-slug class="cv-slug" v-bind="props">
    <slot></slot>
  </cds-slug>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/slug/slug.js";
import type { CvSlugProps } from "./CvSlug.ts";
const props = defineProps<CvSlugProps>();
</script>
