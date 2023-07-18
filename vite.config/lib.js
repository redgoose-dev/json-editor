import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = defineConfig(({ mode }) => {
  const path = process.cwd()
  const env = loadEnv(mode, path)
  return {
    publicDir: false,
    build: {
      lib: {
        entry: './src/json-editor/index.svelte',
        formats: [ 'es' ],
        name: 'JsonEditor',
      },
      outDir: './lib',
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          preserveModules: false,
          // manualChunks: {
          //   'svelte': [ 'svelte' ],
          // },
          // entryFileNames: o => {
          //   return '[name].js'
          // },
          // chunkFileNames: (o) => {
          //   return 'vendor/[name].js'
          // },
        },
        external: [
          'public/*',
        ],
      },
      // minify: 'terser',
    },
    plugins: [
      svelte({
        preprocess: vitePreprocess(),
        // include: 'src/components/**/*.svelte',
        compilerOptions: {
          customElement: true,
        },
        emitCss: true,
      }),
    ],
  }
})

export default config
