import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = defineConfig(({ mode }) => {
  const path = process.cwd()
  const env = loadEnv(mode, path)
  return {
    root: path + '/src/docs',
    base: './',
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
    },
    build: {
      outDir: path + '/docs',
      assetsDir: 'assets',
      emptyOutDir: false,
    },
    plugins: [
      svelte({
        preprocess: vitePreprocess(),
        extensions: [ '.svelte' ],
        compilerOptions: {
          customElement: false,
        },
        onwarn(warning, defaultHandler)
        {
          // console.log('====>', warning.code)
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
  }
})

export default config
