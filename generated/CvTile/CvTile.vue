<template>
  <cds-tile class="cv-tile" v-bind="props">
    <slot></slot>
  </cds-tile>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tile/tile.js";
import type { CvTileProps } from "./CvTile.ts";
const props = defineProps<CvTileProps>();
</script>
