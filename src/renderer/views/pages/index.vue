<script setup lang="ts">
import { RouterLink } from 'vue-router';
const { shell } = window.electron;
</script>

<template>
  <div class="flex h-full flex-col px-6 py-12 lg:px-8">
    <div class="flex flex-1 flex-col justify-center space-y-12">
      <div class="space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="flex justify-center">
          <img
            class="h-12 w-auto animate-spin"
            style="animation-duration: 1920ms"
            src="./../../assets/electron.svg"
            alt=""
          />
        </div>

        <p class="text-center text-zinc-600 dark:text-zinc-400">
          A modern, feature-rich scaffolding for building cross-platform desktop applications with Electron, Vue, and
          TypeScript.
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            v-bind:to="{ name: 'settings.index' }"
            class="group relative isolate inline-flex cursor-default items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2 font-semibold text-zinc-900 shadow-xs ring-1 ring-zinc-300 hover:bg-zinc-50"
          >
            Continue
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
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>

    <footer class="mt-12">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <p class="text-center text-zinc-600 dark:text-zinc-400">
          © 2025
          <a
            v-on:click.prevent="shell.openExternal('https://github.com/santosvilanculos')"
            class="cursor-default font-medium text-indigo-600 underline hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            href="https://github.com/santosvilanculos"
            >Santos Vilanculos</a
          >. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
