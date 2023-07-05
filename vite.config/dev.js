import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = defineConfig(({ mode }) => {
  const path = process.cwd()
  const env = loadEnv(mode, path)
  return {
    root: path + '/src/dev',
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
    },
    plugins: [
      svelte({
        preprocess: vitePreprocess(),
        extensions: [ '.svelte' ],
        compilerOptions: {
          customElement: false,
        },
      }),
    ],
  }
})

export default config
