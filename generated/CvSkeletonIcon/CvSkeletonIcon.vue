<template>
  <cds-skeleton-icon class="cv-skeleton-icon" v-bind="props">
    <slot></slot>
  </cds-skeleton-icon>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/skeleton-icon/skeleton-icon.js";
import type { CvSkeletonIconProps } from "./CvSkeletonIcon.ts";
const props = defineProps<CvSkeletonIconProps>();
</script>
