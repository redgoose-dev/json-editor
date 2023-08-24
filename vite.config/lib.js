import fs from 'fs'
import { build } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const path = process.cwd()
const minify = true
const buildConfig = {
  core: {
    publicDir: false,
    build: {
      lib: {
        entry: { 'json-editor': './src/json-editor/exports.js' },
        name: 'JsonEditor',
        formats: [ 'es', 'umd' ],
      },
      outDir: './lib',
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          preserveModules: false,
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            let ext = info[info.length - 1]
            if (/css/.test(ext)) return `json-editor[extname]`
            return `[name][extname]`
          },
        },
      },
      emptyOutDir: false,
      minify,
    },
    configFile: false,
  },
  docs: {
    configFile: false,
    root: `${path}/src/docs`,
    base: './',
    build: {
      outDir: path + '/docs',
      assetsDir: 'assets',
      emptyOutDir: false,
      minify,
    },
    plugins: [
      svelte({
        preprocess: vitePreprocess(),
        extensions: [ '.svelte' ],
        onwarn(warning, defaultHandler)
        {
          switch (warning.code)
          {
            case 'a11y-no-static-element-interactions':
            case 'a11y-click-events-have-key-events':
            case 'a11y-no-noninteractive-element-interactions':
            case 'css-unused-selector':
              return
          }
          defaultHandler(warning)
        },
      }),
    ],
  },
}

// build core
await build(buildConfig.core)
fs.copyFileSync(`${path}/src/json-editor/index.d.ts`, `${path}/lib/json-editor.d.ts`)

// build docs
await build(buildConfig.docs)
