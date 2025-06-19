import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@orchid-design-system/ui';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
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
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Whether single or multiple items can be opened at once',
    },
    collapsible: {
      control: 'boolean',
      description: 'When type is "single", allows closing all items',
    },
    defaultValue: {
      control: 'text',
      description: 'Default open accordion item(s)',
    },
    value: {
      control: 'text',
      description: 'Controlled value for open accordion item(s)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the accordion',
    },
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the accordion',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
const AccordionExample = ({ skin, ...props }: any) => (
  <Accordion skin={skin} {...props}>
    <AccordionItem value="item-1" skin={skin}>
      <AccordionTrigger skin={skin}>Is it accessible?</AccordionTrigger>
      <AccordionContent skin={skin}>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" skin={skin}>
      <AccordionTrigger skin={skin}>Is it styled?</AccordionTrigger>
      <AccordionContent skin={skin}>
        Yes. It comes with default styles that matches the other components' aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" skin={skin}>
      <AccordionTrigger skin={skin}>Is it animated?</AccordionTrigger>
      <AccordionContent skin={skin}>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
export const Default: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
  },
  render: AccordionExample,
};
export const BothSkins: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Shadcn Skin</h3>
        <AccordionExample {...args} skin="shadcn" className="w-[400px]" type="single" collapsible />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Neobrutalism Skin</h3>
        <AccordionExample {...args} skin="neobrutalism" className="w-[400px]" type="single" collapsible />
      </div>
    </div>
  ),
};
export const SingleCollapsible: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1',
  },
  render: AccordionExample,
};
export const SingleNonCollapsible: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Always one open</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          With collapsible set to false, at least one item must always be open.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Cannot close all</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          Clicking on the active item won't close it when collapsible is false.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
export const Multiple: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'multiple',
    defaultValue: ['item-1', 'item-3'],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Can I open multiple items?</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          Yes. Set the type prop to "multiple" to allow multiple items to be opened at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Is it customizable?</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          Yes. You can customize the styles using className props on each component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Does it support themes?</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          Yes. It automatically adapts to the selected skin (shadcn or neobrutalism).
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
export const WithLongContent: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Long content example</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Another item</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          Short content here.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
export const Disabled: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
    disabled: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin}>
        <AccordionTrigger skin={args.skin} disabled>
          Disabled accordion item
        </AccordionTrigger>
        <AccordionContent skin={args.skin}>
          This content cannot be accessed because the trigger is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Enabled accordion item</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          This item is not disabled and can be toggled normally.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
export const WithCustomContent: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>
          <div className="flex items-center gap-2">
            <span>🎨</span>
            <span>Custom trigger content</span>
          </div>
        </AccordionTrigger>
        <AccordionContent skin={args.skin}>
          <div className="space-y-2">
            <h4 className="font-semibold">Custom Content Structure</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>You can add any React components</li>
              <li>Style them as needed</li>
              <li>Create rich content experiences</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>
          <div className="flex items-center gap-2">
            <span>📦</span>
            <span>Another custom item</span>
          </div>
        </AccordionTrigger>
        <AccordionContent skin={args.skin}>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <code>Custom styled content area</code>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
export const ControlledState: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
  },
  render: (args) => {
    const [value, setValue] = React.useState<string | undefined>('item-2');
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setValue('item-1')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Open Item 1
          </button>
          <button
            onClick={() => setValue('item-2')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Open Item 2
          </button>
          <button
            onClick={() => setValue(undefined)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Close All
          </button>
        </div>
        <Accordion
          {...args}
          type="single"
          collapsible
          value={value}
          onValueChange={setValue}
        >
          <AccordionItem value="item-1" skin={args.skin}>
            <AccordionTrigger skin={args.skin}>Controlled Item 1</AccordionTrigger>
            <AccordionContent skin={args.skin}>
              This accordion is controlled via external state.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" skin={args.skin}>
            <AccordionTrigger skin={args.skin}>Controlled Item 2</AccordionTrigger>
            <AccordionContent skin={args.skin}>
              Use the buttons above to control which item is open.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};
export const EmptyState: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
    </Accordion>
  ),
};
export const SingleItem: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin}>
        <AccordionTrigger skin={args.skin}>Only one item</AccordionTrigger>
        <AccordionContent skin={args.skin}>
          This accordion has only one item to demonstrate single item behavior.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
export const WithClassNames: Story = {
  args: {
    className: 'w-[400px] border-2 border-blue-500 p-4 rounded-lg',
    skin: 'shadcn',
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" skin={args.skin} className="bg-blue-50 dark:bg-blue-900/20">
        <AccordionTrigger skin={args.skin} className="text-blue-600 dark:text-blue-400">
          Custom styled item
        </AccordionTrigger>
        <AccordionContent skin={args.skin} className="text-blue-700 dark:text-blue-300">
          This demonstrates custom className props on each component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" skin={args.skin} className="bg-green-50 dark:bg-green-900/20">
        <AccordionTrigger skin={args.skin} className="text-green-600 dark:text-green-400">
          Another styled item
        </AccordionTrigger>
        <AccordionContent skin={args.skin} className="text-green-700 dark:text-green-300">
          Each component part can have its own custom styles.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};