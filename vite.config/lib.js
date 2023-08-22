import fs from 'fs'
import { build } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import vue from '@vitejs/plugin-vue'

const path = process.cwd()
const minify = true
const buildConfig = {
  core: {
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
  },
  webComponent: {
    publicDir: false,
    build: {
      lib: {
        entry: { 'json-editor.wc': './src/web-component.js' },
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

function getFrameworkComponentConfig(type)
{
  let root, entry, external, plugins
  switch (type)
  {
    case 'web-component':
      break
    case 'vue':
      root = `${path}/packages/vue`
      entry = { 'json-editor.vue': './src/json-editor/index.vue' }
      external = [ 'vue' ]
      plugins = [ vue() ]
      break
    case 'svelte':
      break
    case 'react':
      break
  }
  return {
    configFile: false,
    root,
    publicDir: false,
    build: {
      lib: {
        entry,
        name: 'JsonEditor',
        formats: [ 'es' ],
      },
      outDir: `${path}/lib`,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          preserveModules: false,
        },
        external,
      },
      emptyOutDir: false,
    },
    plugins,
  }
}

// build core
await build(buildConfig.core)
fs.copyFileSync(`${path}/src/json-editor/core.d.ts`, `${path}/lib/json-editor.d.ts`)

// build web component
await build(buildConfig.webComponent)

// build docs
await build(buildConfig.docs)

// build vue component
await build(getFrameworkComponentConfig('vue'))

// TODO: build svelte
// TODO: build react
