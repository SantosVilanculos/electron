<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="space-y-5 py-4">
    <header class="mx-auto flex w-full max-w-[24rem] justify-between gap-1.5">
      <div class="">
        <RouterLink
          v-bind:to="{ name: 'index' }"
          class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
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
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </RouterLink>
      </div>

      <div class="flex gap-1.5">
        <RouterLink
          v-bind:to="{ name: 'settings.index' }"
          exact-active-class="bg-zinc-300 dark:bg-zinc-800 dark:text-indigo-600"
          class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
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
        </RouterLink>
        <RouterLink
          v-bind:to="{ name: 'settings.about' }"
          active-class="bg-zinc-300 dark:bg-zinc-800 dark:text-indigo-600"
          class="group relative isolate grid size-9 place-items-center rounded-md text-sm text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300"
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
        </RouterLink>
      </div>
    </header>

    <hr class="border-zinc-300 dark:border-white/20" />

    <div class="">
      <RouterView />
    </div>
  </div>
</template>
