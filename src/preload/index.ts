import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronAPI } from './../common/preload.d.ts';

contextBridge.exposeInMainWorld('electron', {
  shell: {
    openExternal: (url, options) => ipcRenderer.invoke('shell:open_external', url, options),
    openPath: path => ipcRenderer.invoke('shell:open_path', path),
    showItemInFolder: path => ipcRenderer.invoke('shell:show_item_in_folder', path)
  },
  settings: {
    allItems: () => ipcRenderer.invoke('settings:all_items'),
    getItem: key => ipcRenderer.invoke('settings:get_item', key),
    setItem: (key, value) => ipcRenderer.invoke('settings:set_item', key, value),
    removeItem: key => ipcRenderer.invoke('settings:remove_item', key),
    reset: keys => ipcRenderer.invoke('settings:reset', keys),
    clear: () => ipcRenderer.invoke('settings:clear'),
    openInEditor: () => ipcRenderer.invoke('settings:open_in_editor'),
    onDidChange: (key, callback) => {
      ipcRenderer.on('settings:on_did_any_change', (_, _key, value) => {
        if (key === _key) callback(value);
      });
    },
    export: () => ipcRenderer.invoke('settings:export')
  },
  environment: {
    mode: process.env.NODE_ENV!,

    chrome_version: process.versions.chrome,
    electron_version: process.versions.electron,
    node_version: process.versions.node,
    v8_version: process.versions.v8
  }
} as ElectronAPI);
