import * as React from 'react';
import * as ShadcnLabel from './shadcn';
import * as NeobrutalismLabel from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

const labelComponents = {
  [SKINS.SHADCN]: ShadcnLabel,
  [SKINS.NEOBRUTALISM]: NeobrutalismLabel,
} as const;

export type LabelProps = React.ComponentProps<typeof ShadcnLabel.Label> & WithSkinProps;

export const Label = React.forwardRef<
  React.ElementRef<typeof ShadcnLabel.Label>,
  LabelProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(labelComponents, skin).Label;
  return <Component ref={ref} {...props} />;
});
Label.displayName = 'Label';