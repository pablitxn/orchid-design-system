import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Test/Simple',
  component: () => <div>Hello Storybook!</div>,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};