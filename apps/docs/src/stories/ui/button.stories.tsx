import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '@orchid-design-system/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    skin: {
      control: 'radio',
      options: ['shadcn', 'neobrutalism'],
      description: 'Visual theme variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child component',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    skin: 'shadcn',
    children: 'Click me',
  },
};

export const AllVariants: Story = {
  args: {
    skin: 'shadcn',
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button {...args} variant="default">Default</Button>
        <Button {...args} variant="destructive">Destructive</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="ghost">Ghost</Button>
        <Button {...args} variant="link">Link</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    skin: 'shadcn',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Button>
    </div>
  ),
};

export const BothSkins: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Shadcn Skin</h3>
        <div className="flex flex-wrap gap-2">
          <Button skin="shadcn" variant="default">Default</Button>
          <Button skin="shadcn" variant="destructive">Destructive</Button>
          <Button skin="shadcn" variant="outline">Outline</Button>
          <Button skin="shadcn" variant="secondary">Secondary</Button>
          <Button skin="shadcn" variant="ghost">Ghost</Button>
          <Button skin="shadcn" variant="link">Link</Button>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Neobrutalism Skin</h3>
        <div className="flex flex-wrap gap-2">
          <Button skin="neobrutalism" variant="default">Default</Button>
          <Button skin="neobrutalism" variant="destructive">Destructive</Button>
          <Button skin="neobrutalism" variant="outline">Outline</Button>
          <Button skin="neobrutalism" variant="secondary">Secondary</Button>
          <Button skin="neobrutalism" variant="ghost">Ghost</Button>
          <Button skin="neobrutalism" variant="link">Link</Button>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    skin: 'shadcn',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Button {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        Payment
      </Button>
      <Button {...args} variant="outline">
        Settings
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    skin: 'shadcn',
    disabled: true,
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    skin: 'shadcn',
    disabled: true,
  },
  render: (args) => (
    <Button {...args}>
      <svg
        className="mr-2 h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Loading...
    </Button>
  ),
};

export const AsChild: Story = {
  args: {
    skin: 'shadcn',
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        Open GitHub
      </a>
    </Button>
  ),
};

export const CustomStyles: Story = {
  args: {
    skin: 'shadcn',
    className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0',
  },
  render: (args) => (
    <Button {...args}>
      Gradient Button
    </Button>
  ),
};

export const ButtonGroup: Story = {
  args: {
    skin: 'shadcn',
  },
  render: (args) => (
    <div className="flex">
      <Button {...args} variant="outline" className="rounded-r-none">
        Left
      </Button>
      <Button {...args} variant="outline" className="rounded-none border-x-0">
        Center
      </Button>
      <Button {...args} variant="outline" className="rounded-l-none">
        Right
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    skin: 'shadcn',
    className: 'w-full',
  },
  render: (args) => (
    <div className="w-[300px]">
      <Button {...args}>
        Full Width Button
      </Button>
    </div>
  ),
};

export const NeobrutalistVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Note: Neobrutalism skin has unique variants (default, noShadow, neutral, reverse)
      </p>
      <div className="flex flex-wrap gap-2">
        <Button skin="neobrutalism" variant="default">Default (with shadow)</Button>
        <Button skin="neobrutalism" variant="noShadow">No Shadow</Button>
        <Button skin="neobrutalism" variant="neutral">Neutral</Button>
        <Button skin="neobrutalism" variant="reverse">Reverse</Button>
      </div>
    </div>
  ),
};