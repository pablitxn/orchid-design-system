import React from 'react';
import { Slot as RadixSlot } from '@radix-ui/react-slot';

export interface SlotProps {
  children: React.ReactNode;
}

const Slot: React.FC<SlotProps> = ({ children }) => {
  return <RadixSlot>{children}</RadixSlot>;
};

export default Slot;