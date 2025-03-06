import { BrowserWindow, ipcMain, shell } from 'electron';
import { settings } from './settings.ts';
import { ElectronStore } from '../common/preload.js';

export const ipc = () => {
  // ---
  settings.onDidAnyChange((newValue, oldValue) => {
    if (newValue === undefined || oldValue === undefined) return;

    const changedKeys: Array<keyof ElectronStore> = Object.keys(newValue).filter(
      key => newValue[key] !== oldValue[key]
    );

    BrowserWindow.getAllWindows().forEach(window => {
      changedKeys.forEach(key => window.webContents.send('on_did_any_change', key, newValue[key]));
    });
  });
  ipcMain.handle('get', (_, key) => settings.get(key));
  ipcMain.handle('set', (_, key, value) => settings.set(key, value));
  ipcMain.handle('open_in_editor', () => settings.openInEditor());

  // ---
  ipcMain.handle('shell_show_item_in_folder', (_, path) => shell.showItemInFolder(path));
  ipcMain.handle('shell_open_path', (_, path) => shell.openPath(path));
  ipcMain.handle('shell_open_external', (_, url) => shell.openExternal(url));
};
