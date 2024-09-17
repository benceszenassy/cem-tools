<template>
  <cds-header-nav class="cv-header-nav" v-bind="props">
    <slot></slot>
  </cds-header-nav>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-nav.js";
import type { CvHeaderNavProps } from "./CvHeaderNav.ts";
const props = defineProps<CvHeaderNavProps>();
</script>
