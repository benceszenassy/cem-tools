<template>
  <cds-side-nav-menu class="cv-side-nav-menu" v-bind="props">
    <template #[:title-icon]="scope">
      <slot name="title-icon" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-side-nav-menu>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/side-nav-menu.js";
import type { CvSideNavMenuProps } from "./CvSideNavMenu.ts";
const props = defineProps<CvSideNavMenuProps>();

const emits = defineEmits<{
  // undefined
  (e: "eventBeforeToggle", value: CustomEvent): void;
  // undefined
  (e: "eventToggle", value: CustomEvent): void;
  // The name of the custom event fired before this side nav menu is being toggled upon a user gesture. Cancellation of this event stops the user-initiated action of toggling this side nav menu.
  (e: "cds-side-nav-menu-beingtoggled", value: undefined): void;
  // The name of the custom event fired after this side nav menu is toggled upon a user gesture.
  (e: "cds-side-nav-menu-toggled", value: undefined): void;
}>();
const slots = defineSlots<{
  // The icon.
  "title-icon": (scope: any) => any;
}>();
</script>
