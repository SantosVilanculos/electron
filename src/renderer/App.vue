<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';

onBeforeMount(async () => {
  const { settings } = window.electron;
  const { style } = document.documentElement;

  const [font_family, font_size] = await Promise.all([settings.getItem('font_family'), settings.getItem('font_size')]);

  //
  style.setProperty('--font-mono', font_family.monospace);
  style.setProperty('--font-sans', font_family.sans_serif);
  settings.onDidChange('font_family', ({ monospace, sans_serif }) => {
    style.setProperty('--font-mono', monospace);
    style.setProperty('--font-sans', sans_serif);
  });

  //
  style.setProperty('font-size', `${font_size}px`);
  settings.onDidChange('font_size', font_size => style.setProperty('font-size', `${font_size}px`));
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
