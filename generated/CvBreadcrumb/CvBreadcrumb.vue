<template>
  <cds-breadcrumb class="cv-breadcrumb" v-bind="props">
    <slot></slot>
  </cds-breadcrumb>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/breadcrumb/breadcrumb.js";
import type { CvBreadcrumbProps } from "./CvBreadcrumb.ts";
const props = defineProps<CvBreadcrumbProps>();
</script>
