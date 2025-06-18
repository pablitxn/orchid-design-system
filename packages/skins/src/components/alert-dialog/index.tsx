import * as React from 'react';
import * as ShadcnAlertDialog from './shadcn';
import * as NeobrutalismAlertDialog from './neobrutalism';
import { type SkinType, type WithSkinProps } from '../../lib/utils';

// Helper to get component based on skin
const getComponent = <T extends keyof typeof ShadcnAlertDialog>(
  componentName: T,
  skin: SkinType = 'shadcn'
) => {
  const components = {
    shadcn: ShadcnAlertDialog,
    neobrutalism: NeobrutalismAlertDialog
  };
  return components[skin][componentName];
};

type AlertDialogProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialog> & WithSkinProps;
type AlertDialogTriggerProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogTrigger> & WithSkinProps;
type AlertDialogContentProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogContent> & WithSkinProps;
type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement> & WithSkinProps;
type AlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement> & WithSkinProps;
type AlertDialogTitleProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogTitle> & WithSkinProps;
type AlertDialogDescriptionProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogDescription> & WithSkinProps;
type AlertDialogActionProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogAction> & WithSkinProps;
type AlertDialogCancelProps = React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogCancel> & WithSkinProps;

export const AlertDialog = ({ skin = 'shadcn', ...props }: AlertDialogProps) => {
  const Component = getComponent('AlertDialog', skin);
  return <Component {...props} />;
};

export const AlertDialogTrigger = ({ skin = 'shadcn', ...props }: AlertDialogTriggerProps) => {
  const Component = getComponent('AlertDialogTrigger', skin);
  return <Component {...props} />;
};

export const AlertDialogContent = ({ skin = 'shadcn', ...props }: AlertDialogContentProps) => {
  const Component = getComponent('AlertDialogContent', skin);
  return <Component {...props} />;
};

export const AlertDialogHeader = ({ skin = 'shadcn', ...props }: AlertDialogHeaderProps) => {
  const Component = getComponent('AlertDialogHeader', skin);
  return <Component {...props} />;
};

export const AlertDialogFooter = ({ skin = 'shadcn', ...props }: AlertDialogFooterProps) => {
  const Component = getComponent('AlertDialogFooter', skin);
  return <Component {...props} />;
};

export const AlertDialogTitle = ({ skin = 'shadcn', ...props }: AlertDialogTitleProps) => {
  const Component = getComponent('AlertDialogTitle', skin);
  return <Component {...props} />;
};

export const AlertDialogDescription = ({ skin = 'shadcn', ...props }: AlertDialogDescriptionProps) => {
  const Component = getComponent('AlertDialogDescription', skin);
  return <Component {...props} />;
};

export const AlertDialogAction = ({ skin = 'shadcn', ...props }: AlertDialogActionProps) => {
  const Component = getComponent('AlertDialogAction', skin);
  return <Component {...props} />;
};

export const AlertDialogCancel = ({ skin = 'shadcn', ...props }: AlertDialogCancelProps) => {
  const Component = getComponent('AlertDialogCancel', skin);
  return <Component {...props} />;
};