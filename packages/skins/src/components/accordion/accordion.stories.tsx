import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionExample = ({ skin, ...props }: any) => (
  <Accordion skin={skin} {...props}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other components' aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
  },
  render: AccordionExample,
};

export const BothSkins: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Shadcn Skin</h3>
        <AccordionExample {...args} skin="shadcn" className="w-[400px]" />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Neobrutalism Skin</h3>
        <AccordionExample {...args} skin="neobrutalism" className="w-[400px]" />
      </div>
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. Set the type prop to "multiple" to allow multiple items to be opened at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. You can customize the styles using className props on each component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support themes?</AccordionTrigger>
        <AccordionContent>
          Yes. It automatically adapts to the selected skin (shadcn or neobrutalism).
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};