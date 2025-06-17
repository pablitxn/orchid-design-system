import React from 'react';
import * as RadixProgress from '@radix-ui/react-progress';

interface ProgressProps extends RadixProgress.ProgressProps {
  value?: number;
  max?: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ value = 0, max = 100, className, ...props }) => {
  const percentage = (value / max) * 100;
  
  return (
    <RadixProgress.Root 
      className={`relative overflow-hidden bg-gray-200 rounded-full h-2 ${className}`}
      value={value}
      max={max}
      {...props}
    >
      <RadixProgress.Indicator
        className="bg-blue-600 h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </RadixProgress.Root>
  );
};

export default Progress;