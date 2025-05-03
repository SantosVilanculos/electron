<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';

onBeforeMount(async () => {
  const { store } = window.electron;
  const { style } = document.documentElement;

  const [font_family, font_size] = await Promise.all([store.get('font_family'), store.get('font_size')]);

  //
  style.setProperty('--font-mono', font_family.monospace);
  style.setProperty('--font-sans', font_family.sans_serif);
  store.onDidChange('font_family', ({ monospace, sans_serif }) => {
    style.setProperty('--font-mono', monospace);
    style.setProperty('--font-sans', sans_serif);
  });

  //
  style.setProperty('font-size', `${font_size}px`);
  store.onDidChange('font_size', font_size => style.setProperty('font-size', `${font_size}px`));
});
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <component v-bind:is="Component" />
    </Transition>
  </RouterView>
</template>
