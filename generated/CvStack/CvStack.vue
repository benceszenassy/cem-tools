<template>
  <cds-stack class="cv-stack" v-bind="props">
    <slot></slot>
  </cds-stack>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/stack/stack.js";
import type { CvStackProps } from "./CvStack.ts";
const props = defineProps<CvStackProps>();
</script>
