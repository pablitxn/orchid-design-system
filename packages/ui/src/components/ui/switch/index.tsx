import { ComponentProps } from 'react';
import * as ShadcnSwitch from './shadcn';
import * as NeobrutalismSwitch from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { type WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

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