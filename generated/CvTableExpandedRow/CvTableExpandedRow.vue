<template>
  <cds-table-expanded-row class="cv-table-expanded-row" v-bind="props">
    <slot></slot>
  </cds-table-expanded-row>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/table-expanded-row.js";
import type { CvTableExpandedRowProps } from "./CvTableExpandedRow.ts";
const props = defineProps<CvTableExpandedRowProps>();
</script>
