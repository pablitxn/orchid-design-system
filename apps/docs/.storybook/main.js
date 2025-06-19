import { dirname, join, resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
  'stories': [
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/ui/src/components/**/*.mdx',
  ],
  'addons': [
    '@chromatic-com/docs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // '@docs/addon-vitest',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config) {
    const { resolve } = await import('path');
    const { fileURLToPath } = await import('url');
    const tailwindcss = await import('@tailwindcss/vite');
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const projectRoot = resolve(__dirname, '../../../');

    // Add Tailwind CSS plugin
    config.plugins = [
      ...config.plugins,
      tailwindcss.default({
        configPath: resolve(__dirname, '../tailwind.config.js'),
      }),
    ];

    // Ensure proper module resolution for monorepo
    config.resolve = {
      ...config.resolve,
      alias: [
        ...(Array.isArray(config.resolve?.alias) ? config.resolve.alias : []),
        {
          find: /^@orchid-design-system\/ui-core\/(.*)$/,
          replacement: resolve(projectRoot, 'packages/primitives/src/components/$1/index.tsx'),
        },
        {
          find: '@orchid-design-system/ui-core',
          replacement: resolve(projectRoot, 'packages/primitives/src/index.ts'),
        },
        {
          find: '@orchid-design-system/skins/styles',
          replacement: resolve(projectRoot, 'packages/ui/src/assets/styles'),
        },
        {
          find: '@orchid-design-system/skins',
          replacement: resolve(projectRoot, 'packages/ui/src'),
        },
        {
          find: '@orchid-design-system/components',
          replacement: resolve(projectRoot, 'packages/components/src'),
        },
      ],
    };

    // Ensure Vite can process files from workspace packages
    config.server = {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: [projectRoot],
      },
    };

    // Optimize deps to include workspace packages
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        ...config.optimizeDeps?.include || [],
        '@orchid-design-system/skins',
        '@radix-ui/colors',
        '@radix-ui/react-accordion',
        '@stitches/react',
        'class-variance-authority',
        'clsx',
        'lucide-react',
        'react',
        'react-dom',
        'tailwind-merge',
        'tw-animate-css'
      ],
    };

    // Add CSS configuration with proper PostCSS processing
    config.css = {
      ...config.css,
      postcss: {
        config: resolve(__dirname, '../postcss.config.js'),
      },
    };

    // Ensure proper CSS processing for packages
    config.build = {
      ...config.build,
      commonjsOptions: {
        ...config.build?.commonjsOptions,
        transformMixedEsModules: true,
      },
    };

    return config;
  },
  docs: {
    autodocs: true,
  },

};
export default config;