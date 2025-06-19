import { ComponentProps } from 'react';
import * as ShadcnSlider from './shadcn';
import * as NeobrutalismSlider from './neobrutalism';
import { getSkinComponent, type WithSkinProps } from '@/lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

const sliderComponents = {
  [SKINS.SHADCN]: ShadcnSlider,
  [SKINS.NEOBRUTALISM]: NeobrutalismSlider,
} as const;

type SliderProps = ComponentProps<typeof ShadcnSlider.Slider> & WithSkinProps;

export const Slider = ({ skin = DEFAULT_SKIN, ...props }: SliderProps) => {
  // @ts-ignore
  const components = getSkinComponent(sliderComponents, skin);
  return <components.Slider {...props} />;
};