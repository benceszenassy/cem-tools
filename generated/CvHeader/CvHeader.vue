<template>
  <cds-header class="cv-header" v-bind="props">
    <slot></slot>
  </cds-header>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header.js";
import type { CvHeaderProps } from "./CvHeader.ts";
const props = defineProps<CvHeaderProps>();
</script>
