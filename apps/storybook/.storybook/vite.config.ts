import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@orchid-design-system/skins/styles': path.resolve(__dirname, '../../../packages/skins/src/assets/styles'),
      '@orchid-design-system/skins': path.resolve(__dirname, '../../../packages/skins/src'),
      '@orchid-design-system/neobrutalism': path.resolve(__dirname, '../../../packages/skins/src'),
      '@orchid-design-system/ui-core': path.resolve(__dirname, '../../../packages/ui-core/src'),
    },
  },
});