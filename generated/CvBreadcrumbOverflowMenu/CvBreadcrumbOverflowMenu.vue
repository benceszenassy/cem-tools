<template>
  <cds-breadcrumb-overflow-menu
    class="cv-breadcrumb-overflow-menu"
    v-bind="props"
  >
    <template #[:icon]="scope">
      <slot name="icon" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-breadcrumb-overflow-menu>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/breadcrumb/breadcrumb-overflow-menu.js";
import type { CvBreadcrumbOverflowMenuProps } from "./CvBreadcrumbOverflowMenu.ts";
const props = defineProps<CvBreadcrumbOverflowMenuProps>();

const slots = defineSlots<{
  // The icon for the trigger button.
  icon: (scope: any) => any;
}>();
</script>
