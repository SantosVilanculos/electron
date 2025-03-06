import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronAPI, IPC } from './../common/preload.d.ts';

contextBridge.exposeInMainWorld('electron', {
  shell: {
    openExternal: (url, options) => ipcRenderer.invoke('shell_open_external', url, options),
    openPath: path => ipcRenderer.invoke('shell_open_path', path),
    showItemInFolder: path => ipcRenderer.invoke('shell_show_item_in_folder', path)
  }
  // storage: {
  //   allItems: () => {},
  //   getItem: () => {},
  //   setItem: () => {},
  //   removeItem: () => {},
  //   clear: () => {},
  //   openInEditor: () => {},
  //   onDidChange: () => {}
  // }
} as ElectronAPI);

contextBridge.exposeInMainWorld('ipc', {
  settings: {
    set: (key, value) => ipcRenderer.invoke('set', key, value),
    get: key => ipcRenderer.invoke('get', key),
    open_in_editor: () => ipcRenderer.sendSync('open_in_editor'),
    on_did_change: (key, callback) => {
      ipcRenderer.on('on_did_any_change', (_, _key, value) => {
        if (key === _key) callback(value);
      });
    },
    clear: () => ipcRenderer.invoke('clear')
  },
  environment: {
    mode: process.env.NODE_ENV!,

    chrome_version: process.versions.chrome,
    electron_version: process.versions.electron,
    node_version: process.versions.node,
    v8_version: process.versions.v8
  }
} as IPC);
