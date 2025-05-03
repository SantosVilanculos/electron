import type { nativeTheme, shell } from 'electron';

export type Store = {
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
  store: {
    allItems: () => Promise<Store>;
    getItem: <Key extends keyof Store>(key: Key) => Promise<Store[Key]>;
    setItem: <Key extends keyof Store>(key: Key, value?: Store[Key]) => Promise<void>;
    removeItem: <Key extends keyof Store>(key: Key) => Promise<void>;
    reset: <Key extends keyof Store>(keys: Key[]) => Promise<void>;
    clear: () => Promise<void>;
    openInEditor: () => Promise<boolean>;
    onDidChange: <Key extends keyof Store>(key: Key, callback: (value: Store[Key]) => void) => void;
    export: () => Promise<boolean>;
  };
  environment: {
    readonly mode: string;

    // readonly application_name: string;
    // readonly application_version: string;

    readonly chrome_version: string;
    readonly electron_version: string;
    readonly node_version: string;
    readonly v8_version: string;
  };
}
