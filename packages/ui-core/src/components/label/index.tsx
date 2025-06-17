import React from 'react';
import * as RadixLabel from '@radix-ui/react-label';

interface LabelProps extends RadixLabel.LabelProps {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <RadixLabel.Root 
      className={`text-sm font-medium text-gray-700 ${className}`} 
      {...props}
    >
      {children}
    </RadixLabel.Root>
  );
};

export default Label;