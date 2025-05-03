<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const {
  chromeVersion,
  electronVersion,
  nodeVersion,
  v8Version,
  applicationName,
  applicationVersion,
  ownerOrAuthorName
} = window.electron.environment;

const name = ref<string>();
const author = ref<string>();
const version = ref<string>();

onBeforeMount(async () => {
  name.value = await applicationName;
  version.value = await applicationVersion;
  author.value = await ownerOrAuthorName;
});
</script>

<template>
  <div class="mx-auto w-[24rem] space-y-6 divide-y divide-white/10">
    <div class="grid auto-cols-[6rem_1fr] grid-flow-col items-center gap-2 pb-4">
      <img class="aspect-square object-contain" src="./../../../assets/icon.png" alt="" />
      <div class="space-y-1.5">
        <p v-text="name"></p>
        <p v-text="version"></p>
        <p>© {{ author }}</p>
      </div>
    </div>

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
