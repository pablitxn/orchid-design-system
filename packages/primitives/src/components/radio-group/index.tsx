import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

export interface RadioGroupProps extends RadixRadioGroup.RadioGroupProps {
  children: React.ReactNode;
  className?: string;
}

export interface RadioGroupItemProps extends RadixRadioGroup.RadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> & {
  Item: React.FC<RadioGroupItemProps>;
} = ({ children, className, ...props }) => {
  return (
    <RadixRadioGroup.Root className={`flex flex-col gap-2 ${className}`} {...props}>
      {children}
    </RadixRadioGroup.Root>
  );
};

RadioGroup.Item = ({ value, id, className, ...props }) => (
  <RadixRadioGroup.Item
    className={`w-5 h-5 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    value={value}
    id={id}
    {...props}
  >
    <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2.5 after:h-2.5 after:rounded-full after:bg-blue-600" />
  </RadixRadioGroup.Item>
);

export default RadioGroup;