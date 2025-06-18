import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';
import type { BadgeProps as ShadcnBadgeProps } from './shadcn';
import type { BadgeProps as NeobrutalismBadgeProps } from './neobrutalism';

// Define separate story types for each skin
type ShadcnStory = StoryObj<{
  skin?: 'shadcn';
  variant?: ShadcnBadgeProps['variant'];
  children: React.ReactNode;
  className?: string;
}>;

type NeobrutalismStory = StoryObj<{
  skin: 'neobrutalism';
  variant?: NeobrutalismBadgeProps['variant'];
  children: React.ReactNode;
  className?: string;
}>;

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    skin: {
      control: 'select',
      options: ['shadcn', 'neobrutalism'] as const,
      description: 'The skin/theme variant of the badge',
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'neutral'],
      description: 'The visual style variant of the badge (available options depend on skin)',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

export const Default: ShadcnStory = {
  args: {
    skin: 'shadcn',
    children: 'Badge',
  },
};

export const Secondary: ShadcnStory = {
  args: {
    skin: 'shadcn',
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: ShadcnStory = {
  args: {
    skin: 'shadcn',
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: ShadcnStory = {
  args: {
    skin: 'shadcn',
    variant: 'outline',
    children: 'Outline',
  },
};

export const AllVariants = {
  args: {} as any,
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge skin="shadcn">Default</Badge>
      <Badge skin="shadcn" variant="secondary">Secondary</Badge>
      <Badge skin="shadcn" variant="destructive">Destructive</Badge>
      <Badge skin="shadcn" variant="outline">Outline</Badge>
    </div>
  ),
};

export const StatusBadges = {
  args: {} as any,
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge skin="shadcn" className="bg-green-100 text-green-800 hover:bg-green-200">
        Active
      </Badge>
      <Badge skin="shadcn" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
        Pending
      </Badge>
      <Badge skin="shadcn" className="bg-red-100 text-red-800 hover:bg-red-200">
        Inactive
      </Badge>
      <Badge skin="shadcn" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
        New
      </Badge>
    </div>
  ),
};

export const WithIcons = {
  args: {} as any,
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge skin="shadcn">
        <svg
          className="mr-1 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        Verified
      </Badge>
      <Badge skin="shadcn" variant="secondary">
        <svg
          className="mr-1 h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Pending
      </Badge>
      <Badge skin="shadcn" variant="destructive">
        <svg
          className="mr-1 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        Error
      </Badge>
    </div>
  ),
};

export const Sizes = {
  args: {} as any,
  render: () => (
    <div className="flex items-center gap-4">
      <Badge skin="shadcn" className="text-xs px-2 py-0.5">Extra Small</Badge>
      <Badge skin="shadcn" className="text-sm px-2.5 py-0.5">Small</Badge>
      <Badge skin="shadcn">Default</Badge>
      <Badge skin="shadcn" className="text-base px-3 py-1">Large</Badge>
      <Badge skin="shadcn" className="text-lg px-4 py-1.5">Extra Large</Badge>
    </div>
  ),
};

export const NeobrutalismVariant: NeobrutalismStory = {
  args: {
    skin: 'neobrutalism',
    children: 'Neobrutalism Badge',
  },
};

export const NeobrutalismAllVariants = {
  args: {} as any,
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge skin="neobrutalism">Default</Badge>
      <Badge skin="neobrutalism" variant="neutral">Neutral</Badge>
    </div>
  ),
};