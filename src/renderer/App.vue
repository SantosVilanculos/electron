<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';

onBeforeMount(async () => {
  const { store } = window.electron;
  const { setProperty } = document.documentElement.style;

  const [font_family, font_size] = await Promise.all([store.getItem('font_family'), store.getItem('font_size')]);

  //
  setProperty('--font-mono', font_family.monospace);
  setProperty('--font-sans', font_family.sans_serif);
  store.onDidChange('font_family', ({ monospace, sans_serif }) => {
    setProperty('--font-mono', monospace);
    setProperty('--font-sans', sans_serif);
  });

  //
  setProperty('font-size', `${font_size}px`);
  store.onDidChange('font_size', font_size => setProperty('font-size', `${font_size}px`));
});
</script>

<template>
  <RouterView />
</template>
