import type { ElectronAPI, IPC } from './../common/preload.d.ts';

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}

export {};
