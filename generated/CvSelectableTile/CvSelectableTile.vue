<template>
  <cds-selectable-tile class="cv-selectable-tile" v-bind="props">
    <slot></slot>
  </cds-selectable-tile>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tile/selectable-tile.js";
import type { CvSelectableTileProps } from "./CvSelectableTile.ts";
const props = defineProps<CvSelectableTileProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventChange", value: CustomEvent): void;
  // The custom event fired after this selectable tile changes its selected state.
  (e: "cds-selectable-tile-changed", value: undefined): void;
}>();
</script>
