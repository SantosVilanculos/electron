import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import type { ElectronStore } from '../../common/preload';

export const useSettingsStore = defineStore('config', () => {
  const { settings } = window.electron;

  const always_on_top = ref<ElectronStore['always_on_top']>(false);
  const font_family = ref<ElectronStore['font_family']>({ monospace: 'GitLab Mono', sans_serif: 'GitLab Sans' });
  const font_size = ref<ElectronStore['font_size']>(16);
  const theme_source = ref<ElectronStore['theme_source']>('system');

  watch(always_on_top, async _ => await settings.setItem('always_on_top', _));
  watch(
    font_family,
    async ({ monospace, sans_serif }) => await settings.setItem('font_family', { monospace, sans_serif }),
    {
      deep: true
    }
  );
  watch(font_size, async _ => await settings.setItem('font_size', _));
  watch(theme_source, async _ => await settings.setItem('theme_source', _));

  settings.getItem('always_on_top').then(_ => (always_on_top.value = _));
  settings.getItem('font_family').then(_ => (font_family.value = _));
  settings.getItem('font_size').then(_ => (font_size.value = _));
  settings.getItem('theme_source').then(_ => (theme_source.value = _));

  settings.onDidChange('always_on_top', _ => (always_on_top.value = _));
  settings.onDidChange('font_family', _ => (font_family.value = _));
  settings.onDidChange('font_size', _ => (font_size.value = _));
  settings.onDidChange('theme_source', _ => (theme_source.value = _));

  return { always_on_top, font_family, font_size, theme_source };
});
