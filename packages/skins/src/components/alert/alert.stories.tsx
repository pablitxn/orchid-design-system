import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './index';
import { Terminal, CheckCircle2, AlertCircle, InfoIcon, AlertTriangle, XCircle } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive'],
      description: 'The visual style variant of the alert',
    },
    skin: {
      control: 'radio',
      options: ['shadcn', 'neobrutalism'],
      description: 'The design skin to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <XCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your storage is almost full. Consider upgrading your plan.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the application is available. Refresh to update.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Successfully saved!</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        This is a simple notification without a title but with an icon for better visual hierarchy.
      </AlertDescription>
    </Alert>
  ),
};

export const LongContent: Story = {
  args: {
    className: 'w-[450px]',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        This is a longer alert message that demonstrates how the component handles multiple lines of text. The layout should remain clean and readable even with extended content. Icons should stay properly aligned at the top.
      </AlertDescription>
    </Alert>
  ),
};

export const SkinComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Shadcn Skin</h3>
        <div className="space-y-4">
          <Alert skin="shadcn" className="w-[450px]">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert skin="shadcn" variant="destructive" className="w-[450px]">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Neobrutalism Skin</h3>
        <div className="space-y-4">
          <Alert skin="neobrutalism" className="w-[450px]">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert skin="neobrutalism" variant="destructive" className="w-[450px]">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  ),
};