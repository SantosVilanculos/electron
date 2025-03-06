<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';
const { settings } = window.ipc;
const { $state } = useSettingsStore();
</script>

<template>
  <div class="md:mx-auto md:w-full md:max-w-md">
    <div class="flex h-12 items-center justify-between px-5">
      <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="always_on_top">Always on top</label>

      <div class="group grid size-4 grid-cols-1">
        <input
          v-model="$state.always_on_top"
          class="focus-visible:o utline-2 col-start-1 row-start-1 appearance-none rounded border border-zinc-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-zinc-300 disabled:bg-zinc-100 disabled:checked:bg-zinc-100 dark:border-zinc-50/12 dark:bg-zinc-950 forced-colors:appearance-auto"
          id="always_on_top"
          type="checkbox"
        />

        <svg
          class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-zinc-950/25"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            class="opacity-0 group-has-[:checked]:opacity-100"
            d="M3 8L6 11L11 3.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="opacity-0 group-has-[:indeterminate]:opacity-100"
            d="M3 7H11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>

    <div class="flex h-12 items-center justify-between px-5">
      <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="monospace">Font monospace</label>

      <input
        v-model.lazy="$state.font_family.monospace"
        class="h-9 w-48 min-w-0 rounded-md bg-white px-2.5 text-sm/6 text-zinc-600 outline-1 -outline-offset-1 outline-zinc-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
        id="monospace"
        type="text"
      />
    </div>

    <div class="flex h-12 items-center justify-between px-5">
      <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="sans_serif">Font sans-serif</label>

      <input
        v-model.lazy="$state.font_family.sans_serif"
        class="h-9 w-48 min-w-0 rounded-md bg-white px-2.5 text-sm/6 text-zinc-600 outline-1 -outline-offset-1 outline-zinc-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
        id="sans_serif"
        type="text"
      />
    </div>

    <div class="flex h-12 items-center justify-between px-5">
      <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="font_size">Font size</label>

      <input
        v-model="$state.font_size"
        class="h-9 w-48 min-w-0 rounded-md bg-white px-2.5 text-sm/6 text-zinc-600 outline-1 -outline-offset-1 outline-zinc-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
        id="font_size"
        type="number"
      />
    </div>

    <div class="flex h-12 items-center justify-between px-5">
      <label class="text-sm/6 text-nowrap text-zinc-600 dark:text-zinc-300" for="theme_source">Theme source</label>

      <div class="grid h-9 w-48 shrink-0 grid-cols-1 focus-within:relative focus-within:isolate">
        <select
          v-model="$state.theme_source"
          class="col-start-1 row-start-1 w-full min-w-0 appearance-none rounded-md bg-white pr-7 pl-2.5 text-sm/6 text-zinc-600 outline-1 -outline-offset-1 outline-zinc-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
          id="theme_source"
        >
          <option value="system">system</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>

        <svg
          class="pointer-events-none col-start-1 row-start-1 mr-2 size-4 self-center justify-self-end text-zinc-600"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>

    <div class="flex h-12 items-center justify-end px-5">
      <div class="grid grid-cols-2 grid-rows-1 gap-1.5">
        <button
          v-on:click="settings.open_in_editor"
          class="group relative isolate inline-flex size-9 items-center justify-center rounded-md bg-white text-sm font-semibold text-zinc-900 shadow-xs ring-1 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-50/12 dark:hover:bg-zinc-700"
          type="button"
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
            class="size-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          </svg>
        </button>

        <button
          v-on:click="settings.clear"
          class="group relative isolate inline-flex size-9 items-center justify-center rounded-md bg-white text-sm font-semibold text-zinc-900 shadow-xs ring-1 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-50/12 dark:hover:bg-zinc-700"
          type="button"
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
            class="size-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
            <path d="M3 4.001v5h5" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
