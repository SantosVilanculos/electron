import type { ElectronAPI } from './../common/preload.d.ts';

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}

export {};
