import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { copyFileSync } from 'fs';

export default defineConfig({
  resolve: {
    alias: {
      '@orchid-design-system/skins/styles': path.resolve(__dirname, '../../../packages/skins/src/assets/styles'),
      '@orchid-design-system/skins': path.resolve(__dirname, '../../../packages/skins/src'),
      '@orchid-design-system/neobrutalism': path.resolve(__dirname, '../../../packages/skins/src'),
      '@orchid-design-system/ui-core': path.resolve(__dirname, '../../../packages/ui-core/src'),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'copy-css-files',
      closeBundle() {
        // Copy CSS files after build
        try {
          // Copy original CSS files
          copyFileSync(
            resolve(__dirname, 'src/assets/styles/shadcn.css'),
            resolve(__dirname, 'dist/shadcn.css')
          );
          copyFileSync(
            resolve(__dirname, 'src/assets/styles/neobrutalism.css'),
            resolve(__dirname, 'dist/neobrutalism.css')
          );
          // Copy scoped CSS files
          copyFileSync(
            resolve(__dirname, 'src/assets/styles/shadcn-scoped.css'),
            resolve(__dirname, 'dist/shadcn-scoped.css')
          );
          copyFileSync(
            resolve(__dirname, 'src/assets/styles/neobrutalism-scoped.css'),
            resolve(__dirname, 'dist/neobrutalism-scoped.css')
          );
        } catch (error) {
          console.error('Failed to copy CSS files:', error);
        }
      }
    }
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
      external: ['react', 'react-dom', '@orchid-design-system/ui-core'],
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