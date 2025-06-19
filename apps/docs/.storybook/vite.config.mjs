import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: {
      '@orchid-design-system/ui/styles': path.resolve(__dirname, '../../../packages/ui/src/assets/styles'),
      '@orchid-design-system/ui': path.resolve(__dirname, '../../../packages/ui/src'),
      '@orchid-design-system/neobrutalism': path.resolve(__dirname, '../../../packages/ui/src'),
      '@orchid-design-system/primitives': path.resolve(__dirname, '../../../packages/primitives/src'),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  css: {
    postcss: './postcss.config.mjs'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'OrchidSkins',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@orchid-design-system/primitives', '@orchid-design-system/ui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    // Disable CSS extraction since we're copying files directly
    cssCodeSplit: true,
  },
});