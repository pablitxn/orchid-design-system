import * as ShadcnRadioGroup from './shadcn';
import * as NeobrutalismRadioGroup from './neobrutalism';
import { getSkinComponent } from '../../lib/getSkinComponent';
import { type WithSkinProps } from '../../lib/utils';
import { DEFAULT_SKIN, SKINS } from '../../lib/constants';
import { type ComponentProps } from 'react';

const radioGroupComponents = {
  [SKINS.SHADCN]: {
    RadioGroup: ShadcnRadioGroup.Index,
    RadioGroupItem: ShadcnRadioGroup.RadioGroupItem,
  },
  [SKINS.NEOBRUTALISM]: NeobrutalismRadioGroup,
} as const;

export type RadioGroupProps = ComponentProps<typeof ShadcnRadioGroup.Index> & WithSkinProps;
export type RadioGroupItemProps = ComponentProps<typeof ShadcnRadioGroup.RadioGroupItem> & WithSkinProps;

export const RadioGroup = ({ skin = DEFAULT_SKIN, ...props }: RadioGroupProps) => {
  // @ts-ignore
  const components = getSkinComponent(radioGroupComponents, skin);
  return <components.RadioGroup {...props} />;
};

export const RadioGroupItem = ({ skin = DEFAULT_SKIN, ...props }: RadioGroupItemProps) => {
  // @ts-ignore
  const components = getSkinComponent(radioGroupComponents, skin);
  return <components.RadioGroupItem {...props} />;
};