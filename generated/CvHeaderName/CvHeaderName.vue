<template>
  <cds-header-name class="cv-header-name" v-bind="props">
    <slot></slot>
  </cds-header-name>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-name.js";
import type { CvHeaderNameProps } from "./CvHeaderName.ts";
const props = defineProps<CvHeaderNameProps>();
</script>
