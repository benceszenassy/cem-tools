<template>
  <cds-button-set class="cv-button-set" v-bind="props">
    <slot></slot>
  </cds-button-set>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/button/button-set.js";
import type { CvButtonSetProps } from "./CvButtonSet.ts";
const props = defineProps<CvButtonSetProps>();
</script>
