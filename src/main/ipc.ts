import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron';
import { settings } from './settings.ts';
import type { ElectronStore } from './../types/index.ts';
import { join } from 'node:path';
import { copyFile } from 'node:fs/promises';

export const ipc = () => {
  // ---
  settings.onDidAnyChange((newValue, oldValue) => {
    if (newValue === undefined || oldValue === undefined) return;

    const changedKeys = (Object.keys(newValue) as (keyof ElectronStore)[]).filter(
      key => newValue[key] !== oldValue[key]
    );

    BrowserWindow.getAllWindows().forEach(window => {
      changedKeys.forEach(key => window.webContents.send('settings:on_did_any_change', key, newValue[key]));
    });
  });
  ipcMain.handle('settings:all_items', () => settings.store);
  ipcMain.handle('settings:get_item', (_, key) => settings.get(key));
  ipcMain.handle('settings:set_item', (_, key, value) => settings.set(key, value));
  ipcMain.handle('settings:remove_item', (_, key) => settings.delete(key));
  ipcMain.handle('settings:reset', (_, keys) => settings.reset(...keys));
  ipcMain.handle('settings:clear', _ => settings.clear());
  ipcMain.handle('settings:open_in_editor', async () => {
    try {
      await settings.openInEditor();
    } catch (_) {
      return false;
    }

    return true;
  });
  ipcMain.handle('settings:export', async () => {
    const window = BrowserWindow.getFocusedWindow();

    if (window === null) return false;

    const { canceled, filePath } = await dialog.showSaveDialog(window, {
      defaultPath: join(app.getPath('home'), 'conf.json')
    });

    if (canceled) return false;

    try {
      await copyFile(settings.path, filePath);
    } catch (_) {
      return false;
    }

    return true;
  });

  // ---
  ipcMain.handle('shell:show_item_in_folder', (_, path) => shell.showItemInFolder(path));
  ipcMain.handle('shell:open_path', (_, path) => shell.openPath(path));
  ipcMain.handle('shell:open_external', (_, url) => shell.openExternal(url));
};
