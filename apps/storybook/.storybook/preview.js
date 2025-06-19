import React from 'react';
// Import global styles that include everything
import '../src/assets/styles/shadcn.css';
import '../src/assets/styles/neobrutalism.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => React.createElement('div', { className: 'p-4' }, React.createElement(Story)),
  ],
};

export default preview;