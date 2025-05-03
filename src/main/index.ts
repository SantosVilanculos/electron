import { app, BrowserWindow, dialog, nativeImage, nativeTheme } from 'electron';
import { join, resolve } from 'node:path';
import { program } from 'commander';
import { ipc } from './ipc';
import { store } from './store';

// <>
program
  .name('electron')
  .version('0.0.1')
  .addHelpText('before', 'Electron Starter Kit 0.0.1\n')
  .allowUnknownOption(true)
  .allowExcessArguments(true)
  .parse(process.argv, { from: 'electron' });
// </>

let window: BrowserWindow | undefined;

// <>
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('electron', process.execPath, [resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('electron');
}

if (app.requestSingleInstanceLock()) {
  app.on('second-instance', (event, argv, workingDirectory) => {
    if (window) {
      if (window.isMinimized()) window.restore();
      window.focus();
    }

    dialog.showErrorBox('Welcome Back', `You arrived from: ${argv.pop()}`);
  });
} else {
  app.quit();
}

app.on('open-file', (event, path) => {
  dialog.showErrorBox('Welcome Back', `You arrived from: ${path}`);
});

app.on('open-url', (event, url) => {
  dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`);
});
// </>

// <>
nativeTheme.themeSource = store.get('theme_source');
// </>

// <>
const createWindow = (): void => {
  window = new BrowserWindow({
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
    window.loadURL('http://127.0.0.1:5173').catch(async reason => {
      if (window === undefined) return;

      const { response } = await dialog.showMessageBox(window, {
        message: String(reason),
        type: 'error',
        buttons: ['Reload', 'Close'],
        title: 'Failed to load URL'
      });

      if (response === 0) window.reload();
    });
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
// </>
