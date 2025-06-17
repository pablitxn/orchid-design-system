import React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';

interface SliderProps extends RadixSlider.SliderProps {
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ className, ...props }) => {
  return (
    <RadixSlider.Root
      className={`relative flex items-center select-none touch-none w-full h-5 ${className}`}
      {...props}
    >
      <RadixSlider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute bg-blue-600 rounded-full h-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block w-5 h-5 bg-white shadow-md rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};

export default Slider;