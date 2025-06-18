import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@orchid-design-system\/ui-core\/(.*)$/,
        replacement: path.resolve(__dirname, '../../packages/ui-core/src/components/$1/index.tsx'),
      },
      {
        find: '@orchid-design-system/ui-core',
        replacement: path.resolve(__dirname, '../../packages/ui-core/src/index.ts'),
      },
      {
        find: '@orchid-design-system/skins',
        replacement: path.resolve(__dirname, '../../packages/skins/src'),
      },
      {
        find: '@orchid-design-system/components',
        replacement: path.resolve(__dirname, '../../packages/components/src'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, '../../packages/skins/src'),
      },
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});