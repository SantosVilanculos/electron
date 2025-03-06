import { app, BrowserWindow, nativeImage, nativeTheme } from 'electron';
import { join } from 'node:path';
import { program } from 'commander';
import { ipc } from './ipc';
import { store } from './store';

// ---
program
  .name('electron')
  .version('0.0.1')
  .addHelpText('before', 'Electron Starter Kit 0.0.1\n')
  .allowUnknownOption(true)
  .allowExcessArguments(true)
  .parse(process.argv, { from: 'electron' });

// ---
nativeTheme.themeSource = store.get('theme_source');

// ---
const createWindow = (): void => {
  const window = new BrowserWindow({
    alwaysOnTop: store.get('always_on_top'),
    autoHideMenuBar: false,
    center: true,
    height: 600,
    icon: nativeImage.createFromPath(
      join(app.getAppPath(), process.env.NODE_ENV === 'development' ? '/build/icon.png' : '/dist/icon.png')
    ),
    show: true,
    width: 800,
    webPreferences: {
      preload:
        process.env.NODE_ENV === 'development'
          ? join(import.meta.dirname, '/preload.cjs')
          : join(app.getAppPath(), '/dist/preload.cjs')
    }
  });

  window.setMenuBarVisibility(false);

  if (process.env.NODE_ENV === 'development') {
    window.loadURL('http://127.0.0.1:5173');
  } else {
    window.loadFile(join(app.getAppPath(), '/dist/renderer/index.html'));
  }

  // window.webContents.openDevTools()

  ipc();
};

app.whenReady().then((): void => {
  createWindow();

  app.on('activate', (): void => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', (): void => {
  if (process.platform !== 'darwin') app.quit();
});
