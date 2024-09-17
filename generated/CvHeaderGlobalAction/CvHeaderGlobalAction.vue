<template>
  <cds-header-global-action class="cv-header-global-action" v-bind="props">
    <slot></slot>
  </cds-header-global-action>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/header-global-action.js";
import type { CvHeaderGlobalActionProps } from "./CvHeaderGlobalAction.ts";
const props = defineProps<CvHeaderGlobalActionProps>();
</script>
