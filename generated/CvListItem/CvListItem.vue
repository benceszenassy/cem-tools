<template>
  <cds-list-item class="cv-list-item" v-bind="props">
    <template #[:nested]="scope">
      <slot name="nested" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-list-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/list/list-item.js";
import type { CvListItemProps } from "./CvListItem.ts";
const props = defineProps<CvListItemProps>();

const slots = defineSlots<{
  // The nested child list.
  nested: (scope: any) => any;
}>();
</script>
