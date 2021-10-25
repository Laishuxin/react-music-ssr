import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgrPlugin()],
  build: {
    minify: false,
  },
  css: {
    modules: {},
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // optimizeDeps: {
  //   include: ['vite-plugin-react-svg'],
  // },
})
