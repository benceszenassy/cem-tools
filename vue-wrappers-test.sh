#!/bin/bash

pnpm --filter custom-element-vue-wrappers build && node ./packages/vue-wrappers/runner.js