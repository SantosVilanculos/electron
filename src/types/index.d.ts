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
    all: () => Promise<Store>;
    get: <Key extends keyof Store>(key: Key) => Promise<Store[Key]>;
    has: <Key extends keyof Store>(key: Key) => Promise<boolean>;
    set: <Key extends keyof Store>(key: Key, value?: Store[Key]) => Promise<void>;
    remove: <Key extends keyof Store>(key: Key) => Promise<void>;
    reset: <Key extends keyof Store>(keys: Key[]) => Promise<void>;
    clear: () => Promise<void>;
    openInEditor: () => Promise<boolean>;
    onDidChange: <Key extends keyof Store>(key: Key, callback: (value: Store[Key]) => void) => void;
    export: () => Promise<boolean>;
  };
  environment: {
    readonly mode: string;

    readonly platform: string;
    readonly arch: string;
    readonly locale: Promise<string>;

    readonly applicationPath: Promise<string>;
    readonly applicationName: Promise<string>;
    readonly applicationVersion: Promise<string>;

    readonly chromeVersion: string;
    readonly electronVersion: string;
    readonly nodeVersion: string;
    readonly v8Version: string;
  };
}
