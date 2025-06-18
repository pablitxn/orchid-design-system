

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../../../packages/skins/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/skins/src/**/*.mdx",
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
  "viteFinal": async (config) => {
    // Ensure proper module resolution
    return config;
  }
};
export default config;