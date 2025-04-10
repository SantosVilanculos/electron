import { BrowserWindow, ipcMain, nativeTheme, shell } from 'electron';
import { settings } from './settings.ts';

export const ipc = () => {
  ipcMain.handle('get', (_, key) => settings.get(key));
  ipcMain.handle('set', (_, key, value) => settings.set(key, value));
  ipcMain.handle('open_in_editor', () => settings.openInEditor());

  // ---
  settings.onDidChange('always_on_top', (newValue, _) => {
    if (newValue === undefined) return;

    BrowserWindow.getAllWindows().forEach(window => {
      if (newValue === window.isAlwaysOnTop()) return;
      window.setAlwaysOnTop(newValue);
      window.webContents.send('on_did_change:always_on_top', newValue);
    });
  });

  // ---
  settings.onDidChange('color_scheme', (newValue, _) => {
    if (newValue === undefined || newValue === nativeTheme.themeSource) return;

    nativeTheme.themeSource = newValue;

    BrowserWindow.getAllWindows().forEach(window => {
      window.webContents.send('on_did_change:color_scheme', newValue);
    });
  });

  nativeTheme.on('updated', () => {
    if (settings.get('color_scheme') === nativeTheme.themeSource) return;

    settings.set('color_scheme', nativeTheme.themeSource);
  });

  // ---
  settings.onDidChange('font_family', (newValue, _) => {
    if (newValue === undefined) return;

    BrowserWindow.getAllWindows().forEach(window => {
      window.webContents.send('on_did_change:font_family', newValue);
    });
  });

  // ---
  settings.onDidChange('font_size', (newValue, _) => {
    if (newValue === undefined) return;

    BrowserWindow.getAllWindows().forEach(window => {
      window.webContents.send('on_did_change:font_size', newValue);
    });
  });

  // https://electronjs.org/docs/api/shell
  ipcMain.handle('shell_show_item_in_folder', (_, path) => shell.showItemInFolder(path));
  ipcMain.handle('shell_open_path', (_, path) => shell.openPath(path));
  ipcMain.handle('shell_open_external', (_, url) => shell.openExternal(url));
};
