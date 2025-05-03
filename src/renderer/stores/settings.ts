import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import type { Store } from './../../types';

export const useSettingsStore = defineStore('settings', () => {
  const { store } = window.electron;

  const always_on_top = ref<Store['always_on_top']>(false);
  const font_family = ref<Store['font_family']>({ monospace: 'GitLab Mono', sans_serif: 'GitLab Sans' });
  const font_size = ref<Store['font_size']>(16);
  const theme_source = ref<Store['theme_source']>('system');

  watch(always_on_top, async _ => await store.set('always_on_top', _));
  watch(font_family, async ({ monospace, sans_serif }) => await store.set('font_family', { monospace, sans_serif }), {
    deep: true
  });
  watch(font_size, async _ => await store.set('font_size', _));
  watch(theme_source, async _ => await store.set('theme_source', _));

  store.get('always_on_top').then(_ => (always_on_top.value = _));
  store.get('font_family').then(_ => (font_family.value = _));
  store.get('font_size').then(_ => (font_size.value = _));
  store.get('theme_source').then(_ => (theme_source.value = _));

  store.onDidChange('always_on_top', _ => (always_on_top.value = _));
  store.onDidChange('font_family', _ => (font_family.value = _));
  store.onDidChange('font_size', _ => (font_size.value = _));
  store.onDidChange('theme_source', _ => (theme_source.value = _));

  return { always_on_top, font_family, font_size, theme_source };
});
