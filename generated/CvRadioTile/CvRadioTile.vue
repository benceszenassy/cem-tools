<template>
  <cds-radio-tile class="cv-radio-tile" v-bind="props">
    <slot></slot>
  </cds-radio-tile>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tile/radio-tile.js";
import type { CvRadioTileProps } from "./CvRadioTile.ts";
const props = defineProps<CvRadioTileProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventRadioChange", value: CustomEvent): void;
  // The name of the custom event fired after this selectable tile changes its selected state.
  (e: "cds-radio-tile-selected", value: undefined): void;
}>();
</script>
