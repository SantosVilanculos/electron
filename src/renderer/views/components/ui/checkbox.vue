<script setup lang="ts">
import { defineModel, defineOptions } from 'vue';

defineOptions({ inheritAttrs: false });

const model = defineModel({ default: false });
</script>

<template lang="html">
  <div class="group grid size-4 grid-cols-1">
    <input
      v-model="model"
      v-bind="$attrs"
      class="col-start-1 row-start-1 appearance-none rounded border border-zinc-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-zinc-300 disabled:bg-zinc-100 disabled:checked:bg-zinc-100 dark:border-white/20 dark:bg-black/10 dark:focus-visible:outline-white forced-colors:appearance-auto"
      type="checkbox"
    />

    <svg
      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-zinc-950/25"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        class="opacity-0 group-has-[:checked]:opacity-100"
        d="M3 8L6 11L11 3.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        class="opacity-0 group-has-[:indeterminate]:opacity-100"
        d="M3 7H11"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </div>
</template>
