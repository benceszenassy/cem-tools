<template>
  <cds-expandable-tile class="cv-expandable-tile" v-bind="props">
    <slot></slot>
  </cds-expandable-tile>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tile/expandable-tile.js";
import type { CvExpandableTileProps } from "./CvExpandableTile.ts";
const props = defineProps<CvExpandableTileProps>();

const emits = defineEmits<{
  // The custom event fired before the expanded state is changed upon a user gesture. Cancellation of this event stops changing the user-initiated change in expanded state.
  (e: "cds-expandable-tile-beingtoggled", value: undefined): void;
  // The custom event fired after a the expanded state is changed upon a user gesture.
  (e: "cds-expandable-tile-toggled", value: undefined): void;
}>();
</script>
