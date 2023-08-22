import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
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
