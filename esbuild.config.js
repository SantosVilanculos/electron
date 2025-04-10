import { buildSync } from 'esbuild';
// import _ from './package.json' with { type: 'json' };
// const _ = await import('./package.json', { with: { type: 'json' } });

process.env.NODE_ENV ??= 'production';

buildSync({
  format: 'cjs',
  target: 'node22',
  platform: 'node',
  minify: process.env.NODE_ENV === 'production',
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  },
  logLevel: 'info',
  bundle: true,
  outfile: './dist/preload.cjs',
  external: ['electron'],
  write: true,
  entryPoints: ['./src/preload/index.ts']
});

buildSync({
  format: 'esm',
  target: 'node22',
  platform: 'node',
  minify: process.env.NODE_ENV === 'production',
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  },
  logLevel: 'info',
  bundle: true,
  outfile: './dist/main.mjs',
  external: ['commander', 'electron', 'electron-store', 'electron-traywindow-positioner'],
  write: true,
  entryPoints: ['./src/main/index.ts']
});
