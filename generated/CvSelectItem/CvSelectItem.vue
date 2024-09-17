<template>
  <cds-select-item class="cv-select-item" v-bind="props">
    <slot></slot>
  </cds-select-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/select/select-item.js";
import type { CvSelectItemProps } from "./CvSelectItem.ts";
const props = defineProps<CvSelectItemProps>();
</script>
