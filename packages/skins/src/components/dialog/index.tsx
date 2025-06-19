import * as React from 'react';
import * as ShadcnDialog from './shadcn';
import * as NeobrutalismDialog from './neobrutalism';
import { getSkinComponent } from '../../lib/getSkinComponent';
import { SKINS } from '../../lib/constants';
import { type ComponentProps } from 'react';
import type { WithSkinProps } from '../../lib/types';

const DEFAULT_SKIN = SKINS.SHADCN;

const dialogComponents = {
  [SKINS.SHADCN]: ShadcnDialog,
  [SKINS.NEOBRUTALISM]: NeobrutalismDialog,
} as const;

export type DialogProps = ComponentProps<typeof ShadcnDialog.Dialog> & WithSkinProps;
export type DialogTriggerProps = ComponentProps<typeof ShadcnDialog.DialogTrigger> & WithSkinProps;
export type DialogPortalProps = ComponentProps<typeof ShadcnDialog.DialogPortal> & WithSkinProps;
export type DialogOverlayProps = ComponentProps<typeof ShadcnDialog.DialogOverlay> & WithSkinProps;
export type DialogContentProps = ComponentProps<typeof ShadcnDialog.DialogContent> & WithSkinProps;
export type DialogHeaderProps = ComponentProps<typeof ShadcnDialog.DialogHeader> & WithSkinProps;
export type DialogFooterProps = ComponentProps<typeof ShadcnDialog.DialogFooter> & WithSkinProps;
export type DialogTitleProps = ComponentProps<typeof ShadcnDialog.DialogTitle> & WithSkinProps;
export type DialogDescriptionProps = ComponentProps<typeof ShadcnDialog.DialogDescription> & WithSkinProps;
export type DialogCloseProps = ComponentProps<typeof ShadcnDialog.DialogClose> & WithSkinProps;

export const Dialog = ({ skin = DEFAULT_SKIN, ...props }: DialogProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.Dialog {...props} />;
};

export const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnDialog.DialogTrigger>,
  DialogTriggerProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogTrigger ref={ref} {...props} />;
});

DialogTrigger.displayName = 'DialogTrigger';

export const DialogPortal = ({ skin = DEFAULT_SKIN, ...props }: DialogPortalProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogPortal {...props} />;
};

export const DialogOverlay = ({ skin = DEFAULT_SKIN, ...props }: DialogOverlayProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogOverlay {...props} />;
};

export const DialogContent = ({ skin = DEFAULT_SKIN, ...props }: DialogContentProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogContent {...props} />;
};

export const DialogHeader = ({ skin = DEFAULT_SKIN, ...props }: DialogHeaderProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogHeader {...props} />;
};

export const DialogFooter = ({ skin = DEFAULT_SKIN, ...props }: DialogFooterProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogFooter {...props} />;
};

export const DialogTitle = ({ skin = DEFAULT_SKIN, ...props }: DialogTitleProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogTitle {...props} />;
};

export const DialogDescription = ({ skin = DEFAULT_SKIN, ...props }: DialogDescriptionProps) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogDescription {...props} />;
};

export const DialogClose = React.forwardRef<
  React.ElementRef<typeof ShadcnDialog.DialogClose>,
  DialogCloseProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const components = getSkinComponent(dialogComponents, skin);
  return <components.DialogClose ref={ref} {...props} />;
});

DialogClose.displayName = 'DialogClose';