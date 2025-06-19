import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    visualizer({
      filename: './dist/stats.html',
    }),
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
      name: 'OrchidUi',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@orchid-design-system/primitives'],
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
  test: {
    environment: 'jsdom',
    globals: true,
  },
});