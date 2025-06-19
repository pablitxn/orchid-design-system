import * as React from 'react';
import * as ShadcnProgress from './shadcn';
import * as NeobrutalismProgress from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

const progressComponents = {
  [SKINS.SHADCN]: ShadcnProgress,
  [SKINS.NEOBRUTALISM]: NeobrutalismProgress,
} as const;

export type ProgressProps = React.ComponentProps<typeof ShadcnProgress.Progress> & WithSkinProps;

export const Progress = React.forwardRef<
  React.ElementRef<typeof ShadcnProgress.Progress>,
  ProgressProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  // @ts-ignore
  const Component = getSkinComponent(progressComponents, skin).Progress;
  return <Component ref={ref} {...props} />;
});
Progress.displayName = 'Progress';