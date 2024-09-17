<template>
  <cds-dropdown-skeleton class="cv-dropdown-skeleton" v-bind="props">
    <slot></slot>
  </cds-dropdown-skeleton>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/dropdown/dropdown-skeleton.js";
import type { CvDropdownSkeletonProps } from "./CvDropdownSkeleton.ts";
const props = defineProps<CvDropdownSkeletonProps>();
</script>
