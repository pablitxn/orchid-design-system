import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './index';
import { Button } from '../button';
import { SKINS } from '../../lib/constants';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <CardTitle skin={args.skin}>Card Title</CardTitle>
        <CardDescription skin={args.skin}>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <p>This is the card content. You can put any content here.</p>
      </CardContent>
      <CardFooter skin={args.skin}>
        <Button variant="outline" skin={args.skin}>Cancel</Button>
        <Button className="ml-auto" skin={args.skin}>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const BothSkins: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Shadcn Skin</h3>
        <Card skin="shadcn" className="w-[350px]">
          <CardHeader skin="shadcn">
            <CardTitle skin="shadcn">Shadcn Card</CardTitle>
            <CardDescription skin="shadcn">Clean and minimal design</CardDescription>
          </CardHeader>
          <CardContent skin="shadcn">
            <p>This card uses the shadcn theme with subtle shadows and borders.</p>
          </CardContent>
          <CardFooter skin="shadcn">
            <Button variant="outline" skin="shadcn">Cancel</Button>
            <Button className="ml-auto" skin="shadcn">Save</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Neobrutalism Skin</h3>
        <Card skin="neobrutalism" className="w-[350px]">
          <CardHeader skin="neobrutalism">
            <CardTitle skin="neobrutalism">Bold Card</CardTitle>
            <CardDescription skin="neobrutalism">Neobrutalist design at its finest</CardDescription>
          </CardHeader>
          <CardContent skin="neobrutalism">
            <p>This card features thick borders and bold shadows that make it pop!</p>
          </CardContent>
          <CardFooter skin="neobrutalism">
            <Button variant="outline" skin="neobrutalism">Cancel</Button>
            <Button className="ml-auto" skin="neobrutalism">Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const HeaderOnly: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <CardTitle skin={args.skin}>Simple Card</CardTitle>
        <CardDescription skin={args.skin}>
          This card only has a header section with title and description.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <CardTitle skin={args.skin}>Article Card</CardTitle>
        <CardDescription skin={args.skin}>Published on December 19, 2024</CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris.
        </p>
      </CardContent>
    </Card>
  ),
};

export const ContentOnly: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardContent className="pt-6" skin={args.skin}>
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-slate-200" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithCustomContent: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <CardTitle skin={args.skin}>Launch Ready</CardTitle>
        </div>
        <CardDescription skin={args.skin}>Your project is ready to deploy</CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Build Status</span>
            <span className="text-sm font-medium text-green-600">Passed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Tests</span>
            <span className="text-sm font-medium">42/42</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Coverage</span>
            <span className="text-sm font-medium">98.5%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between" skin={args.skin}>
        <Button variant="ghost" size="sm" skin={args.skin}>View Details</Button>
        <Button size="sm" skin={args.skin}>Deploy Now</Button>
      </CardFooter>
    </Card>
  ),
};

export const Interactive: Story = {
  args: {
    className: 'w-[350px] cursor-pointer transition-all hover:shadow-lg',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args} onClick={() => alert('Card clicked!')}>
      <CardHeader skin={args.skin}>
        <CardTitle skin={args.skin}>Clickable Card</CardTitle>
        <CardDescription skin={args.skin}>Click anywhere on this card</CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <p>This entire card is clickable and shows hover effects.</p>
      </CardContent>
    </Card>
  ),
};

export const Grid: Story = {
  args: {
    skin: 'shadcn',
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} skin={args.skin}>
          <CardHeader skin={args.skin}>
            <CardTitle skin={args.skin}>Card {i}</CardTitle>
            <CardDescription skin={args.skin}>Description for card {i}</CardDescription>
          </CardHeader>
          <CardContent skin={args.skin}>
            <p>Content for card {i}</p>
          </CardContent>
          <CardFooter skin={args.skin}>
            <Button variant="outline" size="sm" skin={args.skin} className="w-full">
              Action {i}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};

export const WithForm: Story = {
  args: {
    className: 'w-[400px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <CardTitle skin={args.skin}>Create Account</CardTitle>
        <CardDescription skin={args.skin}>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter skin={args.skin}>
        <Button variant="outline" skin={args.skin}>Cancel</Button>
        <Button className="ml-auto" skin={args.skin}>Create Account</Button>
      </CardFooter>
    </Card>
  ),
};

export const Pricing: Story = {
  args: {
    skin: 'shadcn',
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card skin={args.skin}>
        <CardHeader skin={args.skin}>
          <CardTitle skin={args.skin}>Free</CardTitle>
          <CardDescription skin={args.skin}>Perfect for getting started</CardDescription>
        </CardHeader>
        <CardContent skin={args.skin}>
          <div className="space-y-4">
            <div className="text-3xl font-bold">$0<span className="text-sm font-normal">/month</span></div>
            <ul className="space-y-2 text-sm">
              <li>✓ 5 projects</li>
              <li>✓ Up to 3 users</li>
              <li>✓ Basic support</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter skin={args.skin}>
          <Button variant="outline" className="w-full" skin={args.skin}>Get Started</Button>
        </CardFooter>
      </Card>
      
      <Card className="border-2 border-primary" skin={args.skin}>
        <CardHeader skin={args.skin}>
          <div className="flex items-center justify-between">
            <CardTitle skin={args.skin}>Pro</CardTitle>
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Popular</span>
          </div>
          <CardDescription skin={args.skin}>For growing teams</CardDescription>
        </CardHeader>
        <CardContent skin={args.skin}>
          <div className="space-y-4">
            <div className="text-3xl font-bold">$29<span className="text-sm font-normal">/month</span></div>
            <ul className="space-y-2 text-sm">
              <li>✓ Unlimited projects</li>
              <li>✓ Up to 20 users</li>
              <li>✓ Priority support</li>
              <li>✓ Advanced analytics</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter skin={args.skin}>
          <Button className="w-full" skin={args.skin}>Get Started</Button>
        </CardFooter>
      </Card>
      
      <Card skin={args.skin}>
        <CardHeader skin={args.skin}>
          <CardTitle skin={args.skin}>Enterprise</CardTitle>
          <CardDescription skin={args.skin}>For large organizations</CardDescription>
        </CardHeader>
        <CardContent skin={args.skin}>
          <div className="space-y-4">
            <div className="text-3xl font-bold">Custom</div>
            <ul className="space-y-2 text-sm">
              <li>✓ Unlimited everything</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter skin={args.skin}>
          <Button variant="outline" className="w-full" skin={args.skin}>Contact Sales</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const WithBadge: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <div className="flex items-center justify-between">
          <CardTitle skin={args.skin}>Premium Feature</CardTitle>
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            New
          </span>
        </div>
        <CardDescription skin={args.skin}>Available in pro plan</CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <p>This feature includes advanced capabilities for power users.</p>
      </CardContent>
    </Card>
  ),
};

export const Loading: Story = {
  args: {
    className: 'w-[350px]',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse mt-2" />
      </CardHeader>
      <CardContent skin={args.skin}>
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithCustomStyles: Story = {
  args: {
    className: 'w-[350px] bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950',
    skin: 'shadcn',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader skin={args.skin}>
        <CardTitle className="text-purple-700 dark:text-purple-300" skin={args.skin}>
          Styled Card
        </CardTitle>
        <CardDescription className="text-purple-600 dark:text-purple-400" skin={args.skin}>
          With custom gradient background
        </CardDescription>
      </CardHeader>
      <CardContent skin={args.skin}>
        <p className="text-purple-700 dark:text-purple-300">
          This card demonstrates custom styling with gradient backgrounds and colored text.
        </p>
      </CardContent>
      <CardFooter skin={args.skin}>
        <Button 
          variant="outline" 
          className="border-purple-300 text-purple-700 hover:bg-purple-100" 
          skin={args.skin}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  ),
};