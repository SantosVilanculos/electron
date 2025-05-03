<script setup lang="ts">
defineProps({
  caption: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div>
    <div
      class="mx-auto grid min-h-12 w-full max-w-[24rem] grid-cols-[1fr_16rem] items-center justify-center gap-x-6 py-2.5"
    >
      <div class="">
        <label v-if="$props.caption" v-text="$props.caption"></label>
      </div>

      <div class="flex flex-col">
        <slot />
      </div>
    </div>
  </div>
</template>
