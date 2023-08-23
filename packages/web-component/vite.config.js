import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: [
        {
          find: '@json-editor',
          replacement: path.resolve(__dirname, '../../src/json-editor'),
        }
      ],
    },
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: false,
      usePolling: true,
    },
    publicDir: false,
    plugins: [],
  }
})
