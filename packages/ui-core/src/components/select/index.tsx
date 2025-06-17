import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';

interface SelectProps extends RadixSelect.SelectProps {
  children: React.ReactNode;
  placeholder?: string;
}

interface SelectTriggerProps extends RadixSelect.SelectTriggerProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
}

interface SelectContentProps extends RadixSelect.SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectItemProps extends RadixSelect.SelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface SelectGroupProps extends RadixSelect.SelectGroupProps {
  children: React.ReactNode;
}

interface SelectLabelProps extends RadixSelect.SelectLabelProps {
  children: React.ReactNode;
  className?: string;
}

const Select: React.FC<SelectProps> & {
  Trigger: React.FC<SelectTriggerProps>;
  Content: React.FC<SelectContentProps>;
  Item: React.FC<SelectItemProps>;
  Group: React.FC<SelectGroupProps>;
  Label: React.FC<SelectLabelProps>;
  Value: typeof RadixSelect.Value;
} = ({ children, ...props }) => {
  return (
    <RadixSelect.Root {...props}>
      {children}
    </RadixSelect.Root>
  );
};

Select.Trigger = ({ children, className, placeholder, ...props }) => (
  <RadixSelect.Trigger
    className={`inline-flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    {...props}
  >
    <RadixSelect.Value placeholder={placeholder} />
    <RadixSelect.Icon className="ml-2">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
);

Select.Content = ({ children, className, ...props }) => (
  <RadixSelect.Portal>
    <RadixSelect.Content
      className={`overflow-hidden bg-white rounded-md shadow-lg border border-gray-200 ${className}`}
      {...props}
    >
      <RadixSelect.Viewport className="p-1">
        {children}
      </RadixSelect.Viewport>
    </RadixSelect.Content>
  </RadixSelect.Portal>
);

Select.Item = ({ children, value, className, ...props }) => (
  <RadixSelect.Item
    className={`relative flex items-center px-8 py-2 text-sm rounded cursor-pointer select-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`}
    value={value}
    {...props}
  >
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    <RadixSelect.ItemIndicator className="absolute left-2 inline-flex items-center">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </RadixSelect.ItemIndicator>
  </RadixSelect.Item>
);

Select.Group = ({ children, ...props }) => (
  <RadixSelect.Group {...props}>{children}</RadixSelect.Group>
);

Select.Label = ({ children, className, ...props }) => (
  <RadixSelect.Label 
    className={`px-8 py-1.5 text-xs font-semibold text-gray-600 ${className}`} 
    {...props}
  >
    {children}
  </RadixSelect.Label>
);

Select.Value = RadixSelect.Value;

export default Select;