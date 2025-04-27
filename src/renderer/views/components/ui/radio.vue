<script setup lang="ts">
import { defineModel } from 'vue';

const model = defineModel();
</script>

<template lang="html">
  <input
    v-model="model"
    class="relative isolate size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/20 dark:bg-black/10 dark:focus-visible:outline-white forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
    type="radio"
  />
</template>
