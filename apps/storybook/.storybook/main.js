

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
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const projectRoot = resolve(__dirname, '../../../');
    
    // Ensure proper module resolution for monorepo
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@orchid-design-system/ui-core': resolve(projectRoot, 'packages/ui-core/src'),
        '@orchid-design-system/skins': resolve(projectRoot, 'packages/skins/src'),
        '@orchid-design-system/components': resolve(projectRoot, 'packages/components/src'),
      }
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
    
    return config;
  }
};
export default config;