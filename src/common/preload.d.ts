import { nativeTheme, shell } from 'electron';

export type ElectronStore = {
  font_family: {
    sans_serif: string;
    monospace: string;
  };
  font_size: number;
  always_on_top: boolean;
  theme_source: typeof nativeTheme.themeSource;
};

export interface ElectronAPI {
  shell: {
    openExternal: typeof shell.openExternal;
    openPath: typeof shell.openPath;
    showItemInFolder: typeof shell.showItemInFolder;
  };
  settings: {
    allItems: () => Promise<ElectronStore>;
    getItem: <Key extends keyof ElectronStore>(key: Key) => Promise<ElectronStore[Key]>;
    setItem: <Key extends keyof ElectronStore>(key: Key, value?: ElectronStore[Key]) => Promise<void>;
    removeItem: <Key extends keyof ElectronStore>(key: Key) => Promise<void>;
    reset: <Key extends keyof ElectronStore>(keys: Key[]) => Promise<void>;
    clear: () => Promise<void>;
    openInEditor: () => Promise<boolean>;
    onDidChange: <Key extends keyof ElectronStore>(key: Key, callback: (value: ElectronStore[Key]) => void) => void;
  };
  environment: {
    readonly mode: string;

    readonly chrome_version: string;
    readonly electron_version: string;
    readonly node_version: string;
    readonly v8_version: string;
  };
}
