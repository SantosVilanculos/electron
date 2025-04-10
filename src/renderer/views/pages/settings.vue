<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';

const { $state } = useSettingsStore();
const { chrome_version, electron_version, node_version, v8_version } = window.ipc.environment;
const { settings } = window.ipc;
const { shell } = window.electron;
</script>

<template>
  <div class="divide-y divide-gray-300 dark:divide-zinc-50/12">
    <div class="">
      <div class="grid auto-cols-fr grid-flow-col gap-1.5 p-4 sm:mx-auto sm:w-full sm:max-w-md">
        <RouterLink
          v-bind:to="{ name: 'index' }"
          class="group relative isolate inline-flex flex-col items-center justify-center gap-y-1.5 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-zinc-300"
        >
          <!-- home -->
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

          <span class="text-nowrap">Lorem, ipsum.</span>
        </RouterLink>

        <button
          v-on:click="settings.open_in_editor"
          class="group relative isolate inline-flex flex-col items-center justify-center gap-y-1.5 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-zinc-300"
          type="button"
        >
          <!-- file -->
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
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          </svg>

          <span class="text-nowrap">Lorem, ipsum.</span>
        </button>
      </div>
    </div>

    <div class="">
      <div class="p-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="space-y-6">
          <div class="">
            <label class="block text-sm/6 font-medium text-nowrap text-gray-900 dark:text-zinc-300" for="monospace">
              Font family (monospace)
            </label>

            <div class="mt-1.5">
              <input
                v-model.lazy="$state.font_family.monospace"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
                id="monospace"
                type="text"
              />
            </div>
          </div>

          <div class="">
            <label class="block text-sm/6 font-medium text-nowrap text-gray-900 dark:text-zinc-300" for="sans_serif">
              Font family (sans-serif)
            </label>

            <div class="mt-1.5">
              <input
                v-model.lazy="$state.font_family.sans_serif"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
                id="sans_serif"
                type="text"
              />
            </div>
          </div>

          <div class="">
            <label class="block text-sm/6 font-medium text-nowrap text-gray-900 dark:text-zinc-300" for="font_size">
              Font size
            </label>

            <div class="mt-1.5">
              <input
                v-model.lazy="$state.font_size"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
                id="font_size"
                type="number"
                min="0"
              />
            </div>
          </div>

          <div class="">
            <label class="block text-sm/6 font-medium text-nowrap text-gray-900 dark:text-zinc-300" for="color_scheme">
              Color scheme
            </label>

            <div class="mt-1.5">
              <div class="grid shrink-0 grid-cols-1 focus-within:relative focus-within:isolate">
                <select
                  v-model="$state.color_scheme"
                  class="col-start-1 row-start-1 w-full min-w-0 appearance-none rounded-md bg-white py-1.5 pr-7 pl-3 text-sm/6 text-gray-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-zinc-950 dark:text-zinc-300 dark:outline-zinc-50/12"
                  id="color_scheme"
                >
                  <option value="system">system</option>
                  <option value="light">light</option>
                  <option value="dark">dark</option>
                </select>

                <svg
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="">
            <label
              class="flex w-full items-center gap-x-1.5 text-sm/6 font-medium text-nowrap text-gray-900 dark:text-zinc-300"
              for="always_on_top"
            >
              <div class="group grid size-4 grid-cols-1">
                <input
                  v-model="$state.always_on_top"
                  type="checkbox"
                  class="focus-visible:o utline-2 col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-zinc-50/12 dark:bg-zinc-950 forced-colors:appearance-auto"
                  id="always_on_top"
                />

                <svg
                  class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
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

              Always on top
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="p-4 sm:mx-auto sm:w-full sm:max-w-md">
        <ul class="space-y-4">
          <li class="flex items-center justify-between">
            <span class="font-medium dark:text-zinc-200">Application</span>
            <span class="font-mono text-gray-600 dark:text-zinc-400">v0.0.1</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="font-medium dark:text-zinc-200">Electron</span>
            <span class="font-mono text-gray-600 dark:text-zinc-400">v{{ electron_version }}</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="font-medium dark:text-zinc-200">Chromium</span>
            <span class="font-mono text-gray-600 dark:text-zinc-400">v{{ chrome_version }}</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="font-medium dark:text-zinc-200">Node</span>
            <span class="font-mono text-gray-600 dark:text-zinc-400">v{{ node_version }}</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="font-medium dark:text-zinc-200">V8</span>
            <span class="font-mono text-gray-600 dark:text-zinc-400">v{{ v8_version }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="">
      <div class="p-4 sm:mx-auto sm:w-full sm:max-w-md">
        <ul class="space-y-4">
          <li
            v-for="({ name, url }, index) in [
              { name: 'Changelog', url: 'https://github.com/santosvilanculos/electron/blob/main/CHANGELOG.md' },
              { name: 'Report an issue', url: 'https://github.com/santosvilanculos/electron/issues' },
              { name: 'License', url: 'https://github.com/santosvilanculos/electron/blob/main/LICENSE' },
              { name: 'Source code', url: 'https://github.com/santosvilanculos/electron' }
            ]"
            v-bind:key="index"
            class=""
          >
            <a
              v-on:click.prevent="shell.openExternal(url)"
              v-bind:href="url"
              class="inline-flex items-center gap-x-1.5 font-medium underline dark:text-zinc-200"
            >
              <span>{{ name }}</span>

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
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
