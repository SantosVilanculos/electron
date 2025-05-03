import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronAPI } from './../types';

contextBridge.exposeInMainWorld('electron', {
  shell: {
    openExternal: (url, options) => ipcRenderer.invoke('shell:open_external', url, options),
    openPath: path => ipcRenderer.invoke('shell:open_path', path),
    showItemInFolder: path => ipcRenderer.invoke('shell:show_item_in_folder', path)
  },
  store: {
    all: () => ipcRenderer.invoke('store:all'),
    get: key => ipcRenderer.invoke('store:get', key),
    has: key => ipcRenderer.invoke('store:set', key),
    set: (key, value) => ipcRenderer.invoke('store:set', key, value),
    remove: key => ipcRenderer.invoke('store:remove', key),
    reset: keys => ipcRenderer.invoke('store:reset', keys),
    clear: () => ipcRenderer.invoke('store:clear'),
    openInEditor: () => ipcRenderer.invoke('store:open_in_editor'),
    onDidChange: (key, callback) => {
      ipcRenderer.on('store:on_did_any_change', (_, _key, value) => {
        if (key === _key) callback(value);
      });
    },
    export: () => ipcRenderer.invoke('store:export')
  },
  environment: {
    mode: process.env.NODE_ENV!,

    platform: process.platform,
    arch: process.arch,
    locale: ipcRenderer.invoke('locale'),

    applicationPath: ipcRenderer.invoke('app:path'),
    applicationName: ipcRenderer.invoke('app:name'),
    applicationVersion: ipcRenderer.invoke('app:version'),

    chromeVersion: process.versions.chrome,
    electronVersion: process.versions.electron,
    nodeVersion: process.versions.node,
    v8Version: process.versions.v8
  }
} as ElectronAPI);
