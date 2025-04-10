import ElectronStore from 'electron-store';
import type { ElectronStore as ElectronStoreType } from './../common/preload.d.ts';

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
