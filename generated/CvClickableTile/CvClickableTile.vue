<template>
  <cds-clickable-tile class="cv-clickable-tile" v-bind="props">
    <slot></slot>
  </cds-clickable-tile>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tile/clickable-tile.js";
import type { CvClickableTileProps } from "./CvClickableTile.ts";
const props = defineProps<CvClickableTileProps>();
</script>
