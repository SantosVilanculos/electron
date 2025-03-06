<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="py-4">
    <div class="grid auto-cols-fr grid-flow-col gap-1.5 px-5 md:mx-auto md:w-full md:max-w-md">
      <RouterLink
        v-bind:to="{ name: 'index' }"
        class="group relative isolate inline-flex flex-col items-center justify-center gap-y-1.5 rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
      >
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
          class="size-4.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>

        <span class="text-nowrap">Home</span>
      </RouterLink>
      <RouterLink
        v-bind:to="{ name: 'settings.index' }"
        exact-active-class="bg-zinc-300 dark:bg-zinc-800 dark:text-indigo-600"
        class="group relative isolate inline-flex flex-col items-center justify-center gap-y-1.5 rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
      >
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
          class="size-4.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
          />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        </svg>
        <span class="text-nowrap">General</span>
      </RouterLink>

      <RouterLink
        v-bind:to="{ name: 'settings.about' }"
        active-class="bg-zinc-300 dark:bg-zinc-800 dark:text-indigo-600"
        class="group relative isolate inline-flex flex-col items-center justify-center gap-y-1.5 rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
      >
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
          class="size-4.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 9h.01" />
          <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
          <path d="M11 12h1v4h1" />
        </svg>
        <span class="text-nowrap">About</span>
      </RouterLink>
    </div>

    <div class="">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
