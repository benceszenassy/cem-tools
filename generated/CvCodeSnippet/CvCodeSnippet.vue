<template>
  <cds-code-snippet class="cv-code-snippet" v-bind="props">
    <slot></slot>
  </cds-code-snippet>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/code-snippet/code-snippet.js";
import type { CvCodeSnippetProps } from "./CvCodeSnippet.ts";
const props = defineProps<CvCodeSnippetProps>();
</script>
