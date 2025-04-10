import type { ElectronAPI, IPC } from './../common/preload.d.ts';

declare global {
  interface Window {
    ipc: IPC;
    electron: ElectronAPI;
  }
}

export {};
