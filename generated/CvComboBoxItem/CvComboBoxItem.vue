<template>
  <cds-combo-box-item class="cv-combo-box-item" v-bind="props">
    <slot></slot>
  </cds-combo-box-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/combo-box/combo-box-item.js";
import type { CvComboBoxItemProps } from "./CvComboBoxItem.ts";
const props = defineProps<CvComboBoxItemProps>();
</script>
