<template>
  <cds-tile-group class="cv-tile-group" v-bind="props">
    <slot></slot>
  </cds-tile-group>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tile/tile-group.js";
import type { CvTileGroupProps } from "./CvTileGroup.ts";
const props = defineProps<CvTileGroupProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventCurrentRadioTileSelection", value: CustomEvent): void;
  // undefined
  (e: "eventCurrentSelectableTilesSelection", value: CustomEvent): void;
  // The name of the custom event fired after a radio tile changes its selected state.
  (e: "cds-current-radio-tile-selection", value: undefined): void;
  // The name of the custom event fired after a selectable tile changes its selected state.
  (e: "cds-current-selectable-tile-selections", value: undefined): void;
}>();
</script>
