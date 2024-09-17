<template>
  <cds-overflow-menu-body class="cv-overflow-menu-body" v-bind="props">
    <slot></slot>
  </cds-overflow-menu-body>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/overflow-menu/overflow-menu-body.js";
import type { CvOverflowMenuBodyProps } from "./CvOverflowMenuBody.ts";
const props = defineProps<CvOverflowMenuBodyProps>();
</script>
