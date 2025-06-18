import React from 'react';

export default {
  title: 'Test/VerySimple',
};

export const Basic = () => React.createElement('div', null, 'Hello World!');

export const WithButton = () => React.createElement('button', { onClick: () => alert('clicked') }, 'Click me');