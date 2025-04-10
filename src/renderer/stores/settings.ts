import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import type { ElectronStore } from '../../common/preload';

export const useSettingsStore = defineStore('config', () => {
  const { settings } = window.ipc;

  const always_on_top = ref<ElectronStore['always_on_top']>(false);
  const font_family = ref<ElectronStore['font_family']>({ monospace: 'GitLab Mono', sans_serif: 'GitLab Sans' });
  const font_size = ref<ElectronStore['font_size']>(16);
  const color_scheme = ref<ElectronStore['color_scheme']>('system');

  watch(always_on_top, async _ => await settings.set('always_on_top', _));
  watch(
    font_family,
    async ({ monospace, sans_serif }) => await settings.set('font_family', { monospace, sans_serif }),
    {
      deep: true
    }
  );
  watch(font_size, async _ => await settings.set('font_size', _));
  watch(color_scheme, async _ => await settings.set('color_scheme', _));

  settings.get('always_on_top').then(_ => (always_on_top.value = _));
  settings.get('font_family').then(_ => (font_family.value = _));
  settings.get('font_size').then(_ => (font_size.value = _));
  settings.get('color_scheme').then(_ => (color_scheme.value = _));

  settings.on_did_change('always_on_top', _ => (always_on_top.value = _));
  settings.on_did_change('font_family', _ => (font_family.value = _));
  settings.on_did_change('font_size', _ => (font_size.value = _));
  settings.on_did_change('color_scheme', _ => (color_scheme.value = _));

  return { always_on_top, font_family, font_size, color_scheme };
});
