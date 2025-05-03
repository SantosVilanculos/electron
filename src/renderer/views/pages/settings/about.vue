<script setup lang="ts">
const { chromeVersion, electronVersion, nodeVersion, v8Version } = window.electron.environment;
</script>

<template>
  <div class="mx-auto w-full max-w-[24rem] space-y-6 divide-y divide-white/10">
    <div class="">
      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Chromium version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ chromeVersion }}</div>
      </div>

      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Electron version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ electronVersion }}</div>
      </div>

      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Node version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ nodeVersion }}</div>
      </div>

      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">V8 version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ v8Version }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
