<template>
  <cds-dropdown-item class="cv-dropdown-item" v-bind="props">
    <slot></slot>
  </cds-dropdown-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/dropdown/dropdown-item.js";
import type { CvDropdownItemProps } from "./CvDropdownItem.ts";
const props = defineProps<CvDropdownItemProps>();
</script>
