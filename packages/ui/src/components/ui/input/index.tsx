import * as React from 'react';
import * as ShadcnInput from './shadcn';
import * as NeobrutalismInput from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

const inputComponents = {
  [SKINS.SHADCN]: ShadcnInput,
  [SKINS.NEOBRUTALISM]: NeobrutalismInput,
} as const;

export type InputProps = React.ComponentProps<typeof ShadcnInput.Input> & WithSkinProps;

export const Input = React.forwardRef<
  React.ElementRef<typeof ShadcnInput.Input>,
  InputProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(inputComponents, skin).Input;
  return <Component ref={ref} {...props} />;
});
Input.displayName = 'Input';