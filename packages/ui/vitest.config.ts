import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    css: true,
    exclude: [
      'node_modules/**',
      'dist/**',
      'tests/**', // Exclude Playwright tests
      '**/*.spec.ts' // Exclude .spec.ts files as they're Playwright tests
    ],
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'json', 'html', 'lcov', 'json-summary'],
      reportsDirectory: './coverage',
      include: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.stories.{js,jsx,ts,tsx}',
        '!src/test/**/*',
      ],
      exclude: [
        'node_modules/',
        'dist/',
        '.docs/',
        '**/*.config.*',
        '**/mockData/**',
        '**/types/**',
        '**/__mocks__/**', // Exclude mock data files
        '**/main.tsx', // Entry point
        '**/*.d.ts', // TypeScript declarations
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
        perFile: true, // Enable per-file thresholds
      },
      all: true,
      clean: true,
      skipFull: false,
    },
    reporters: [
      'default',
      'html',
      ['json', { outputFile: './test-results/results.json' }],
      ['junit', { outputFile: './test-results/junit.xml' }],
    ],
    outputFile: {
      json: './test-results/json-results.json',
      html: './test-results/index.html',
    },
    // settings
    testTimeout: 10000, // timeout para tests largos
    hookTimeout: 10000,
    teardownTimeout: 10000,
    pool: 'threads', // o 'forks' for parallel execution
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    logHeapUsage: true, // use for debugging memory issues
    allowOnly: false, //  true to only run tests marked with .only
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
