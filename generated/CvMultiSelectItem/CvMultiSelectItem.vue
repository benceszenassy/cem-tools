<template>
  <cds-multi-select-item class="cv-multi-select-item" v-bind="props">
    <slot></slot>
  </cds-multi-select-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/multi-select/multi-select-item.js";
import type { CvMultiSelectItemProps } from "./CvMultiSelectItem.ts";
const props = defineProps<CvMultiSelectItemProps>();
</script>
