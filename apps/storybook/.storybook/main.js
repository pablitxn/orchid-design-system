

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../../../packages/skins/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/skins/src/components/**/*.mdx",
    "../../../packages/components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/components/src/**/*.mdx"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
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
      })
    ];
    
    // Ensure proper module resolution for monorepo
    config.resolve = {
      ...config.resolve,
      alias: [
        ...(Array.isArray(config.resolve?.alias) ? config.resolve.alias : []),
        {
          find: /^@orchid-design-system\/ui-core\/(.*)$/,
          replacement: resolve(projectRoot, 'packages/ui-core/src/components/$1/index.tsx'),
        },
        {
          find: '@orchid-design-system/ui-core',
          replacement: resolve(projectRoot, 'packages/ui-core/src/index.ts'),
        },
        {
          find: '@orchid-design-system/skins/styles',
          replacement: resolve(projectRoot, 'packages/skins/src/assets/styles'),
        },
        {
          find: '@orchid-design-system/skins',
          replacement: resolve(projectRoot, 'packages/skins/src'),
        },
        {
          find: '@orchid-design-system/components',
          replacement: resolve(projectRoot, 'packages/components/src'),
        },
        {
          find: '@',
          replacement: resolve(projectRoot, 'packages/skins/src'),
        },
      ]
    };
    
    // Ensure Vite can process files from workspace packages
    config.server = {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: [projectRoot]
      }
    };
    
    // Optimize deps to include workspace packages
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        ...config.optimizeDeps?.include || [],
        'react',
        'react-dom',
        '@radix-ui/react-slot',
        'class-variance-authority',
        'clsx',
        'tailwind-merge'
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
        transformMixedEsModules: true
      }
    };
    
    return config;
  }
};
export default config;