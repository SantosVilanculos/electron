<script setup lang="ts">
const model = defineModel();
</script>

<template lang="html">
  <input
    v-model="model"
    class="h-9 min-w-0 rounded-md bg-white px-2.5 text-sm/6 outline-1 -outline-offset-1 outline-zinc-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 dark:bg-transparent dark:outline-white/20 dark:focus-visible:outline-white"
    type="text"
  />
</template>
