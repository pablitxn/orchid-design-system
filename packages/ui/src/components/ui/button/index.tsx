import * as React from 'react';
import * as ShadcnButton from './shadcn';
import * as NeobrutalismButton from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { SKINS } from '../../../lib/constants.ts';
import type { WithSkinProps } from '../../../lib/utils.ts';

const DEFAULT_SKIN = SKINS.SHADCN;

const buttonComponents = {
  [SKINS.SHADCN]: ShadcnButton,
  [SKINS.NEOBRUTALISM]: NeobrutalismButton,
} as const;

export type ButtonProps = React.ComponentPropsWithRef<typeof ShadcnButton.Button> & WithSkinProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ skin = DEFAULT_SKIN, ...props }, ref) => {
    const components = getSkinComponent(buttonComponents, skin);
    // @ts-ignore
    return <components.Button ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';