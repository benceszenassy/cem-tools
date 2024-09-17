<template>
  <cds-switcher class="cv-switcher" v-bind="props">
    <slot></slot>
  </cds-switcher>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/switcher.js";
import type { CvSwitcherProps } from "./CvSwitcher.ts";
const props = defineProps<CvSwitcherProps>();
</script>
