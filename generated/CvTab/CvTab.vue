<template>
  <cds-tab class="cv-tab" v-bind="props">
    <slot></slot>
  </cds-tab>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/tab.js";
import type { CvTabProps } from "./CvTab.ts";
const props = defineProps<CvTabProps>();
</script>
