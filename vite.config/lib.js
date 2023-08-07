import fs from 'fs'
import { build } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const path = process.cwd()
const minify = true

/**
 * core
 */
export const core = {
  publicDir: false,
  build: {
    lib: {
      entry: { 'json-editor': './src/lib.js' },
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
}
await build(core)
fs.copyFileSync(`${path}/src/json-editor/core.d.ts`, `${path}/lib/json-editor.d.ts`)

/**
 * web component
 */
export const webComponent = {
  publicDir: false,
  build: {
    lib: {
      entry: { 'web-component': './src/web-component.js' },
      name: 'JsonEditor',
      formats: [ 'es', 'umd' ],
    },
    outDir: './lib',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        preserveModules: false,
      },
    },
    emptyOutDir: false,
    minify,
  },
  configFile: false,
}
await build(webComponent)

/**
 * docs
 */
export const docs = {
  configFile: false,
  root: path + '/src/docs',
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
    }),
  ],
}
await build(docs)
