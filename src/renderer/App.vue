<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';

onBeforeMount(async () => {
  const { settings } = window.ipc;
  const { style } = document.documentElement;

  const [font_family, font_size] = await Promise.all([settings.get('font_family'), settings.get('font_size')]);

  //
  style.setProperty('--font-mono', font_family.monospace);
  style.setProperty('--font-sans', font_family.sans_serif);
  settings.on_did_change('font_family', ({ monospace, sans_serif }) => {
    style.setProperty('--font-mono', monospace);
    style.setProperty('--font-sans', sans_serif);
  });

  //
  style.setProperty('font-size', `${font_size}px`);
  settings.on_did_change('font_size', font_size => style.setProperty('font-size', `${font_size}px`));
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
