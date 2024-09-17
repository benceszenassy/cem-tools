<template>
  <cds-breadcrumb-item class="cv-breadcrumb-item" v-bind="props">
    <slot></slot>
  </cds-breadcrumb-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/breadcrumb/breadcrumb-item.js";
import type { CvBreadcrumbItemProps } from "./CvBreadcrumbItem.ts";
const props = defineProps<CvBreadcrumbItemProps>();
</script>
