import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';

interface SwitchProps extends RadixSwitch.SwitchProps {
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ className, ...props }) => {
  return (
    <RadixSwitch.Root
      className={`w-11 h-6 bg-gray-200 rounded-full relative shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[state=checked]:bg-blue-600 ${className}`}
      {...props}
    >
      <RadixSwitch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
    </RadixSwitch.Root>
  );
};

export default Switch;