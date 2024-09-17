<template>
  <cds-select-item-group class="cv-select-item-group" v-bind="props">
    <slot></slot>
  </cds-select-item-group>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/select/select-item-group.js";
import type { CvSelectItemGroupProps } from "./CvSelectItemGroup.ts";
const props = defineProps<CvSelectItemGroupProps>();
</script>
