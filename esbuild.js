import { context } from 'esbuild';
// import _ from './package.json' with { type: 'json' };
// const _ = await import('./package.json', { with: { type: 'json' } });

process.env.NODE_ENV ??= 'production';

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
  name: 'esbuild-problem-matcher',

  setup(build) {
    build.onStart(() => {
      console.log(`[watch] build started: ${build.initialOptions.entryPoints.join(', ')}`);
    });
    build.onEnd(result => {
      result.errors.forEach(({ text, location }) => {
        console.error(`✘ [ERROR] ${text}`);
        console.error(`    ${location.file}:${location.line}:${location.column}:`);
      });
      console.log(`[watch] build finished: ${build.initialOptions.entryPoints.join(', ')}`);
    });
  }
};

async function build() {
  const preload = await context({
    sourcemap: process.env.NODE_ENV === 'development',
    sourcesContent: false,
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
    entryPoints: ['./src/preload/index.ts'],
    plugins: [
      /* add to the end of plugins array */
      esbuildProblemMatcherPlugin
    ]
  });

  const main = await context({
    sourcemap: process.env.NODE_ENV === 'development',
    sourcesContent: false,
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
    entryPoints: ['./src/main/index.ts'],
    plugins: [
      /* add to the end of plugins array */
      esbuildProblemMatcherPlugin
    ]
  });

  const { argv } = process;
  if (argv.includes('-w') || argv.includes('--watch')) {
    await Promise.all([preload.watch(), main.watch()]);
  } else {
    await Promise.all([preload.rebuild(), main.rebuild()]);
    await Promise.all([preload.dispose(), main.dispose()]);
  }
}

build().catch(e => {
  console.error(e);
  process.exit(1);
});
