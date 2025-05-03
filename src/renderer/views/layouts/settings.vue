<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { BrandGitHub, ChevronLeft, Settings, InfoSquare } from '@/views/components/svg';

const { openExternal } = window.electron.shell;
</script>

<template>
  <div class="space-y-5 py-4">
    <nav class="mx-auto flex w-full max-w-[24rem] justify-between gap-1.5">
      <div class="">
        <RouterLink
          v-bind:to="{ name: 'index' }"
          class="group relative isolate inline-flex size-9 flex-nowrap items-center justify-center rounded-md border border-zinc-300 text-sm focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 dark:border-white/20 dark:bg-black/10 dark:focus-visible:outline-white"
        >
          <ChevronLeft />
        </RouterLink>
      </div>

      <div class="flex gap-1.5">
        <RouterLink
          v-bind:to="{ name: 'settings.index' }"
          exact-active-class="bg-zinc-300 dark:bg-zinc-800 dark:text-indigo-600"
          class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
        >
          <Settings />
        </RouterLink>
        <RouterLink
          v-bind:to="{ name: 'settings.about' }"
          active-class="bg-zinc-300 dark:bg-zinc-800 dark:text-indigo-600"
          class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
        >
          <InfoSquare />
        </RouterLink>
        <!-- <button -->
        <!--   type="button" -->
        <!--   class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300" -->
        <!-- > -->
        <!--   <World /> -->
        <!-- </button> -->
        <button
          v-on:click="openExternal('https://github.com/santosvilanculos/electron')"
          type="button"
          class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
        >
          <BrandGitHub />
        </button>
      </div>
    </nav>

    <hr class="border-zinc-300 dark:border-white/20" />

    <div class="">
      <RouterView />
    </div>
  </div>
</template>
