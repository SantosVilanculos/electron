import type { ElectronAPI } from './../types';

declare global {
  interface FontData {
    blob: () => Promise<Blob>;
    readonly family: string;
    readonly fullName: string;
    readonly postscriptName: string;
    readonly style: string;
  }

  interface Window {
    queryLocalFonts: (options?: { postscriptNames: string[] }) => Promise<FontData[]>;
    electron: ElectronAPI;
  }

  type PermissionName =
    | 'geolocation'
    | 'midi'
    | 'notifications'
    | 'persistent-storage'
    | 'push'
    | 'screen-wake-lock'
    | 'storage-access'
    | 'local-fonts';

  interface PermissionDescriptor {
    name: PermissionName;
  }

  interface Permissions {
    query: (permissionDesc: PermissionDescriptor) => Promise<PermissionStatus>;
  }

  interface Navigator {
    permissions: Permissions;
  }
}

export {};
