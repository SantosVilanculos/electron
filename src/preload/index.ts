import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronAPI } from './../types';

contextBridge.exposeInMainWorld('electron', {
  shell: {
    openExternal: (url, options) => ipcRenderer.invoke('shell:open_external', url, options),
    openPath: path => ipcRenderer.invoke('shell:open_path', path),
    showItemInFolder: path => ipcRenderer.invoke('shell:show_item_in_folder', path)
  },
  store: {
    allItems: () => ipcRenderer.invoke('store:all_items'),
    getItem: key => ipcRenderer.invoke('store:get_item', key),
    setItem: (key, value) => ipcRenderer.invoke('store:set_item', key, value),
    removeItem: key => ipcRenderer.invoke('store:remove_item', key),
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

    chrome_version: process.versions.chrome,
    electron_version: process.versions.electron,
    node_version: process.versions.node,
    v8_version: process.versions.v8
  }
} as ElectronAPI);
