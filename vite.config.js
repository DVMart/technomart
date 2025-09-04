import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 },
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs' },
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/styles/style.scss';`,
      },
    },
  },
  optimizeDeps: {
    include: ['src/components/bootstrap.bundle.min.js'],
  },
})