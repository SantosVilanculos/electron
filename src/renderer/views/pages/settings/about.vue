<script setup lang="ts">
import { Button } from '@/views/components/ui';

const { chrome_version, electron_version, node_version, v8_version } = window.electron.environment;
</script>

<template>
  <div class="mx-auto w-full max-w-md space-y-6 divide-y divide-white/10">
    <div class="">
      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Chromium version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ chrome_version }}</div>
      </div>

      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Electron version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ electron_version }}</div>
      </div>

      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Node version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ node_version }}</div>
      </div>

      <div class="flex h-12 items-center justify-between">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">V8 version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ v8_version }}</div>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <Button>View Source</Button>
      <Button>Report bug</Button>
      <Button>Request feature</Button>
    </div>
  </div>
</template>

<style scoped></style>
