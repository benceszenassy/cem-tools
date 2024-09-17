<template>
  <cds-side-nav-link class="cv-side-nav-link" v-bind="props">
    <template #[:link]="scope">
      <slot name="link" v-bind="scope" />
    </template>
    <template #[:title]="scope">
      <slot name="title" v-bind="scope" />
    </template>
    <template #[:title-icon-container]="scope">
      <slot name="title-icon-container" v-bind="scope" />
    </template>

    <slot></slot>
  </cds-side-nav-link>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/ui-shell/side-nav-link.js";
import type { CvSideNavLinkProps } from "./CvSideNavLink.ts";
const props = defineProps<CvSideNavLinkProps>();

const slots = defineSlots<{
  // The link.
  link: (scope: any) => any;
  // The title.
  title: (scope: any) => any;
  // The title icon container.
  "title-icon-container": (scope: any) => any;
}>();
</script>
