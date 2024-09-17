<template>
  <cds-link class="cv-link" v-bind="props">
    <slot></slot>
  </cds-link>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/link/link.js";
import type { CvLinkProps } from "./CvLink.ts";
const props = defineProps<CvLinkProps>();
</script>
