import React from 'react';
import '../src/index.css';

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