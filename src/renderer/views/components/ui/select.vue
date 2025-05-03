<script setup lang="ts">
defineOptions({ inheritAttrs: false });

const model = defineModel();
</script>

<template lang="html">
  <div class="grid h-9 shrink-0 grid-cols-1 focus-within:relative focus-within:isolate">
    <select
      v-model="model"
      v-bind="$attrs"
      class="col-start-1 row-start-1 w-full min-w-0 appearance-none rounded-md bg-white pr-7 pl-2.5 text-sm/6 outline-1 -outline-offset-1 outline-zinc-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-white focus-visible:outline-indigo-600 dark:bg-zinc-900 dark:outline-white/20"
    >
      <slot />
    </select>

    <svg
      class="pointer-events-none col-start-1 row-start-1 mr-2 size-4 self-center justify-self-end"
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
</template>
