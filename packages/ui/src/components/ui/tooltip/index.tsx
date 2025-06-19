import { ComponentProps } from 'react';
import * as ShadcnTooltip from './shadcn';
import * as NeobrutalismTooltip from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { type WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

const tooltipComponents = {
  [SKINS.SHADCN]: ShadcnTooltip,
  [SKINS.NEOBRUTALISM]: NeobrutalismTooltip,
} as const;

type TooltipProps = ComponentProps<typeof ShadcnTooltip.Tooltip> & WithSkinProps;
type TooltipTriggerProps = ComponentProps<typeof ShadcnTooltip.TooltipTrigger> & WithSkinProps;
type TooltipContentProps = ComponentProps<typeof ShadcnTooltip.TooltipContent> & WithSkinProps;
type TooltipProviderProps = ComponentProps<typeof ShadcnTooltip.TooltipProvider> & WithSkinProps;

export const Tooltip = ({ skin = DEFAULT_SKIN, ...props }: TooltipProps) => {
  const components = getSkinComponent(tooltipComponents, skin);
  return <components.Tooltip {...props} />;
};

export const TooltipTrigger = ({ skin = DEFAULT_SKIN, ...props }: TooltipTriggerProps) => {
  const components = getSkinComponent(tooltipComponents, skin);
  return <components.TooltipTrigger {...props} />;
};

export const TooltipContent = ({ skin = DEFAULT_SKIN, ...props }: TooltipContentProps) => {
  const components = getSkinComponent(tooltipComponents, skin);
  return <components.TooltipContent {...props} />;
};

export const TooltipProvider = ({ skin = DEFAULT_SKIN, ...props }: TooltipProviderProps) => {
  const components = getSkinComponent(tooltipComponents, skin);
  return <components.TooltipProvider {...props} />;
};