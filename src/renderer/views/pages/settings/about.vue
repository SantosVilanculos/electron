<script setup lang="ts">
const { chrome_version, electron_version, node_version, v8_version } = window.electron.environment;
</script>

<template>
  <div class="divide-y divide-zinc-50/12 md:mx-auto md:w-full md:max-w-md">
    <div class="">
      <div class="flex h-12 items-center justify-between px-5">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Chromium version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ chrome_version }}</div>
      </div>

      <div class="flex h-12 items-center justify-between px-5">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Electron version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ electron_version }}</div>
      </div>

      <div class="flex h-12 items-center justify-between px-5">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">Node version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ node_version }}</div>
      </div>

      <div class="flex h-12 items-center justify-between px-5">
        <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="">V8 version</label>

        <div class="font-mono text-zinc-600 dark:text-zinc-300">{{ v8_version }}</div>
      </div>
    </div>

    <div class="">
      <a
        v-on:click.prevent=""
        href="#"
        class="flex h-12 items-center justify-between px-5 text-zinc-600 dark:text-zinc-300"
      >
        <label class="text-sm/6 text-nowrap" for="">Legal</label>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
          <path d="M11 13l9 -9" />
          <path d="M15 4h5v5" />
        </svg>
      </a>

      <a
        v-on:click.prevent=""
        href="#"
        class="flex h-12 items-center justify-between px-5 text-zinc-600 dark:text-zinc-300"
      >
        <label class="text-sm/6 text-nowrap" for="">Report an issue</label>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
          <path d="M11 13l9 -9" />
          <path d="M15 4h5v5" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
