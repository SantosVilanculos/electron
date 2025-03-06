import { nativeTheme, BrowserWindow } from 'electron';
import ElectronStore from 'electron-store';
import type { Store } from './../types';

const store = new ElectronStore<Store>({
  schema: {
    always_on_top: {
      type: 'boolean',
      default: false
    },
    font_family: {
      type: 'object',
      properties: {
        monospace: {
          type: 'string'
        },
        sans_serif: {
          type: 'string'
        }
      },
      default: {
        monospace: 'GitLab Mono',
        sans_serif: 'GitLab Sans'
      }
    },
    font_size: {
      type: 'number',
      minimum: 0,
      default: 16
    },
    theme_source: {
      type: 'string',
      enum: ['system', 'light', 'dark'],
      default: 'system'
    }
  },
  watch: true
});

// ---
store.onDidChange('always_on_top', (newValue, _) => {
  if (newValue === undefined) return;

  BrowserWindow.getAllWindows().forEach(window => {
    if (newValue === window.isAlwaysOnTop()) return;

    window.setAlwaysOnTop(newValue);
  });
});

// ---
store.onDidChange('theme_source', (newValue, _) => {
  if (newValue === undefined || newValue === nativeTheme.themeSource) return;

  nativeTheme.themeSource = newValue;
});

nativeTheme.on('updated', () => {
  if (store.get('theme_source') === nativeTheme.themeSource) return;

  store.set('theme_source', nativeTheme.themeSource);
});

export { store };
