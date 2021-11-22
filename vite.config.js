/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#composables': path.resolve(__dirname, './src/composables'),
      '#layouts': path.resolve(__dirname, './src/layouts'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#store': path.resolve(__dirname, './src/store'),
      '#types': path.resolve(__dirname, '../api/types'),
      '#utils': path.resolve(__dirname, './src/utils'),
      '#chalk2': path.resolve(__dirname, '../workflow/src/chalk2'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  plugins: [
    vue(),
  ],
  server: {
    port: 4000,
  },
})
