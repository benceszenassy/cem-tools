<template>
  <cds-unordered-list class="cv-unordered-list" v-bind="props">
    <slot></slot>
  </cds-unordered-list>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/list/unordered-list.js";
import type { CvUnorderedListProps } from "./CvUnorderedList.ts";
const props = defineProps<CvUnorderedListProps>();
</script>
