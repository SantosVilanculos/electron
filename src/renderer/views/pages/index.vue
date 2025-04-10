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

        <p class="text-justify font-mono text-gray-600 dark:text-zinc-400">
          A modern, feature-rich scaffolding for building cross-platform desktop applications with Electron, Vue, and
          TypeScript.
        </p>

        <div class="mt-10 flex justify-center">
          <RouterLink
            v-bind:to="{ name: 'settings' }"
            class="group relative isolate inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50"
            >Settings</RouterLink
          >
        </div>
      </div>
    </div>

    <footer class="mt-12">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <p class="text-center font-mono text-gray-600 dark:text-gray-400">
          Copyright © 2025
          <a
            v-on:click.prevent="shell.openExternal('https://github.com/santosvilanculos')"
            class="font-medium text-indigo-600 underline hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            href="https://github.com/santosvilanculos"
            >Santos Vilanculos</a
          >. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
