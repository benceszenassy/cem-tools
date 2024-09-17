<template>
  <cds-button-set-base class="cv-button-set-base" v-bind="props">
    <slot></slot>
  </cds-button-set-base>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/button/button-set-base.js";
import type { CvButtonSetBaseProps } from "./CvButtonSetBase.ts";
const props = defineProps<CvButtonSetBaseProps>();
</script>
