<template>
  <cds-form-item class="cv-form-item" v-bind="props">
    <slot></slot>
  </cds-form-item>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/form/form-item.js";
import type { CvFormItemProps } from "./CvFormItem.ts";
const props = defineProps<CvFormItemProps>();
</script>
