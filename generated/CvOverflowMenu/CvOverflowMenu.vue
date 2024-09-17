<template>
  <cds-overflow-menu class="cv-overflow-menu" v-bind="props">
    <template #[:icon]="scope">
      <slot name="icon" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-overflow-menu>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/overflow-menu/overflow-menu.js";
import type { CvOverflowMenuProps } from "./CvOverflowMenu.ts";
const props = defineProps<CvOverflowMenuProps>();

const slots = defineSlots<{
  // The icon for the trigger button.
  icon: (scope: any) => any;
}>();
</script>
