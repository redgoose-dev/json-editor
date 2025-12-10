import { defineConfig, loadEnv } from 'vite'
import { css } from './_libs.js'

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
    css: {
      ...css,
    },
    plugins: [],
  }
})

export default config
