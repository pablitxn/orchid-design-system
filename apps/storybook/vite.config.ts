import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/lib/utils': path.resolve(__dirname, './src/lib/utils'),
      '@orchid-design-system/skins/styles': path.resolve(__dirname, '../../packages/skins/src/assets/styles')
    }
  }
})