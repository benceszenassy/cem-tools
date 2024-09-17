<template>
  <cds-breadcrumb-link class="cv-breadcrumb-link" v-bind="props">
    <slot></slot>
  </cds-breadcrumb-link>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/breadcrumb/breadcrumb-link.js";
import type { CvBreadcrumbLinkProps } from "./CvBreadcrumbLink.ts";
const props = defineProps<CvBreadcrumbLinkProps>();
</script>
