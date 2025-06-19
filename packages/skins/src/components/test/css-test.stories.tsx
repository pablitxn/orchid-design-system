import type { Meta, StoryObj } from '@storybook/react';

const TailwindTest = () => (
  <div className="p-8 space-y-4">
    <h1 className="text-4xl font-bold text-primary">Tailwind CSS Test</h1>
    <div className="bg-primary text-primary-foreground p-4 rounded-md">
      This should have primary background with white text
    </div>
    <div className="bg-secondary text-secondary-foreground p-4 rounded-md">
      This should have secondary background
    </div>
    <div className="border-2 border-primary p-4 rounded-lg">
      This should have a primary border
    </div>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Standard Tailwind Button (blue)
    </button>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-red-500 p-4 text-white">Red</div>
      <div className="bg-green-500 p-4 text-white">Green</div>
      <div className="bg-blue-500 p-4 text-white">Blue</div>
    </div>
  </div>
);

const meta = {
  title: 'Test/CSS Test',
  component: TailwindTest,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};