import { defineConfig, loadEnv } from 'vite'

const config = defineConfig(({ mode, command }) => {
  const path = process.cwd()
  const env = loadEnv(mode, path)
  return {
    publicDir: false,
    build: {
      lib: {
        entry: {
          'json-editor': './src/json-editor/web-component.js',
        },
        name: 'JsonEditor',
        formats: [ 'es' ],
      },
      outDir: './lib',
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          preserveModules: false,
          // manualChunks: {
          //   'svelte': [ 'svelte' ],
          //   'cash-dom': [ 'cash-dom' ],
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
      // minify: false,
      emptyOutDir: false,
    },
    plugins: [],
  }
})

export default config
