import ElectronStore from 'electron-store';
import type { ElectronStore as ElectronStoreType } from './../common/preload.d.ts';
import { BrowserWindow } from 'electron/main';
import { nativeTheme } from 'electron';

export const settings = new ElectronStore<ElectronStoreType>({
  schema: {
    always_on_top: {
      type: 'boolean',
      default: false
    },
    color_scheme: {
      type: 'string',
      enum: ['system', 'light', 'dark'],
      default: 'system'
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
    }
  },
  watch: true
});

// ---
settings.onDidChange('always_on_top', (newValue, _) => {
  if (newValue === undefined) return;

  BrowserWindow.getAllWindows().forEach(window => {
    if (newValue === window.isAlwaysOnTop()) return;

    window.setAlwaysOnTop(newValue);
  });
});

// ---
settings.onDidChange('color_scheme', (newValue, _) => {
  if (newValue === undefined || newValue === nativeTheme.themeSource) return;

  nativeTheme.themeSource = newValue;
});

nativeTheme.on('updated', () => {
  if (settings.get('color_scheme') === nativeTheme.themeSource) return;

  settings.set('color_scheme', nativeTheme.themeSource);
});
