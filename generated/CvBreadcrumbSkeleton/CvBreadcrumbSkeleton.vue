<template>
  <cds-breadcrumb-skeleton class="cv-breadcrumb-skeleton" v-bind="props">
    <slot></slot>
  </cds-breadcrumb-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/breadcrumb/breadcrumb-skeleton.js";
import type { CvBreadcrumbSkeletonProps } from "./CvBreadcrumbSkeleton.ts";
const props = defineProps<CvBreadcrumbSkeletonProps>();
</script>
