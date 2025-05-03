import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron';
import { join } from 'node:path';
import { copyFile } from 'node:fs/promises';
import { store } from './store';
import type { Store } from './../types';
import { version } from './../../package.json';
import { productName } from './../../electron-builder.json';

export const ipc = () => {
  // ---
  store.onDidAnyChange((newValue, oldValue) => {
    if (newValue === undefined || oldValue === undefined) return;

    const changedKeys = (Object.keys(newValue) as (keyof Store)[]).filter(key => newValue[key] !== oldValue[key]);

    BrowserWindow.getAllWindows().forEach(window => {
      changedKeys.forEach(key => window.webContents.send('store:on_did_any_change', key, newValue[key]));
    });
  });
  ipcMain.handle('store:all', () => store.store);
  ipcMain.handle('store:get', (_, key) => store.get(key));
  ipcMain.handle('store:has', (_, key) => store.has(key));
  ipcMain.handle('store:set', (_, key, value) => store.set(key, value));
  ipcMain.handle('store:remove', (_, key) => store.delete(key));
  ipcMain.handle('store:reset', (_, keys) => store.reset(...keys));
  ipcMain.handle('store:clear', () => store.clear());
  ipcMain.handle('store:open_in_editor', async () => {
    try {
      await store.openInEditor();
    } catch (_) {
      return false;
    }

    return true;
  });
  ipcMain.handle('store:export', async () => {
    const window = BrowserWindow.getFocusedWindow();

    if (window === null) return false;

    const { canceled, filePath } = await dialog.showSaveDialog(window, {
      defaultPath: join(app.getPath('home'), 'conf.json')
    });

    if (canceled) return false;

    try {
      await copyFile(store.path, filePath);
    } catch (_) {
      return false;
    }

    return true;
  });

  // ---
  ipcMain.handle('locale', () => app.getSystemLocale());

  // ---
  ipcMain.handle('app:name', () => productName);
  ipcMain.handle('app:version', () => version);
  ipcMain.handle('app:path', () => app.getAppPath());

  // ---
  ipcMain.handle('shell:show_item_in_folder', (_, path) => shell.showItemInFolder(path));
  ipcMain.handle('shell:open_path', (_, path) => shell.openPath(path));
  ipcMain.handle('shell:open_external', (_, url) => shell.openExternal(url));
};
