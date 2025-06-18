import React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

export interface DropdownMenuProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownMenuTriggerProps extends RadixDropdownMenu.DropdownMenuTriggerProps {
  children: React.ReactNode;
}

export interface DropdownMenuContentProps extends RadixDropdownMenu.DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface DropdownMenuItemProps extends RadixDropdownMenu.DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export interface DropdownMenuSeparatorProps extends RadixDropdownMenu.DropdownMenuSeparatorProps {
  className?: string;
}

export interface DropdownMenuLabelProps extends RadixDropdownMenu.DropdownMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> & {
  Trigger: React.FC<DropdownMenuTriggerProps>;
  Content: React.FC<DropdownMenuContentProps>;
  Item: React.FC<DropdownMenuItemProps>;
  Separator: React.FC<DropdownMenuSeparatorProps>;
  Label: React.FC<DropdownMenuLabelProps>;
} = ({ children, open, onOpenChange }) => {
  return (
    <RadixDropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDropdownMenu.Root>
  );
};

DropdownMenu.Trigger = ({ children, ...props }) => (
  <RadixDropdownMenu.Trigger {...props}>{children}</RadixDropdownMenu.Trigger>
);

DropdownMenu.Content = ({ children, className, ...props }) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content 
      className={`min-w-[220px] bg-white rounded-md p-1 shadow-lg ${className}`} 
      {...props}
    >
      {children}
    </RadixDropdownMenu.Content>
  </RadixDropdownMenu.Portal>
);

DropdownMenu.Item = ({ children, className, ...props }) => (
  <RadixDropdownMenu.Item 
    className={`text-sm px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none ${className}`} 
    {...props}
  >
    {children}
  </RadixDropdownMenu.Item>
);

DropdownMenu.Separator = ({ className, ...props }) => (
  <RadixDropdownMenu.Separator 
    className={`h-px bg-gray-200 my-1 ${className}`} 
    {...props} 
  />
);

DropdownMenu.Label = ({ children, className, ...props }) => (
  <RadixDropdownMenu.Label 
    className={`px-2 py-1.5 text-xs font-semibold text-gray-600 ${className}`} 
    {...props}
  >
    {children}
  </RadixDropdownMenu.Label>
);

export default DropdownMenu;