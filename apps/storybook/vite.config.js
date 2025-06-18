import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@orchid-design-system/ui-core': path.resolve(__dirname, '../../packages/ui-core/src'),
      '@orchid-design-system/skins': path.resolve(__dirname, '../../packages/skins/src'),
      '@orchid-design-system/components': path.resolve(__dirname, '../../packages/components/src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});