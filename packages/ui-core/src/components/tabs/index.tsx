import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

interface TabsProps extends RadixTabs.TabsProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsListProps extends RadixTabs.TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface TabsContentProps extends RadixTabs.TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const Tabs: React.FC<TabsProps> & {
  List: React.FC<TabsListProps>;
  Trigger: React.FC<TabsTriggerProps>;
  Content: React.FC<TabsContentProps>;
} = ({ children, className, ...props }) => {
  return (
    <RadixTabs.Root className={`flex flex-col ${className}`} {...props}>
      {children}
    </RadixTabs.Root>
  );
};

Tabs.List = ({ children, className, ...props }) => (
  <RadixTabs.List
    className={`flex border-b border-gray-200 ${className}`}
    {...props}
  >
    {children}
  </RadixTabs.List>
);

Tabs.Trigger = ({ children, value, className, ...props }) => (
  <RadixTabs.Trigger
    className={`px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    value={value}
    {...props}
  >
    {children}
  </RadixTabs.Trigger>
);

Tabs.Content = ({ children, value, className, ...props }) => (
  <RadixTabs.Content
    className={`pt-4 focus:outline-none ${className}`}
    value={value}
    {...props}
  >
    {children}
  </RadixTabs.Content>
);

export default Tabs;