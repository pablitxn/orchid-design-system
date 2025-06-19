import { ComponentProps } from 'react';
import * as ShadcnSwitch from './shadcn';
import * as NeobrutalismSwitch from './neobrutalism';
import { getSkinComponent, type WithSkinProps } from '@/lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

const switchComponents = {
  [SKINS.SHADCN]: ShadcnSwitch,
  [SKINS.NEOBRUTALISM]: NeobrutalismSwitch,
} as const;

type SwitchProps = ComponentProps<typeof ShadcnSwitch.Switch> & WithSkinProps;

export const Switch = ({ skin = DEFAULT_SKIN, ...props }: SwitchProps) => {
  // @ts-ignore
  const components = getSkinComponent(switchComponents, skin);
  return <components.Switch {...props} />;
};