import React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';

export interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface AlertDialogTriggerProps extends RadixAlertDialog.AlertDialogTriggerProps {
  children: React.ReactNode;
}

export interface AlertDialogContentProps extends RadixAlertDialog.AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface AlertDialogTitleProps extends RadixAlertDialog.AlertDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface AlertDialogDescriptionProps extends RadixAlertDialog.AlertDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface AlertDialogActionProps extends RadixAlertDialog.AlertDialogActionProps {
  children: React.ReactNode;
  className?: string;
}

export interface AlertDialogCancelProps extends RadixAlertDialog.AlertDialogCancelProps {
  children: React.ReactNode;
  className?: string;
}

const AlertDialogRoot = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Root>,
  AlertDialogProps
>(({ children, open, onOpenChange }, ref) => {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixAlertDialog.Root>
  );
});
AlertDialogRoot.displayName = 'AlertDialog';

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Trigger>,
  AlertDialogTriggerProps
>(({ children, ...props }, ref) => (
  <RadixAlertDialog.Trigger ref={ref} {...props}>
    {children}
  </RadixAlertDialog.Trigger>
));
AlertDialogTrigger.displayName = 'AlertDialog.Trigger';

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Content>,
  AlertDialogContentProps
>(({ children, className, ...props }, ref) => (
  <RadixAlertDialog.Portal>
    <RadixAlertDialog.Overlay className="fixed inset-0 bg-black/50" />
    <RadixAlertDialog.Content 
      ref={ref}
      className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 ${className}`} 
      {...props}
    >
      {children}
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
));
AlertDialogContent.displayName = 'AlertDialog.Content';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Title>,
  AlertDialogTitleProps
>(({ children, className, ...props }, ref) => (
  <RadixAlertDialog.Title 
    ref={ref}
    className={`text-lg font-semibold ${className}`} 
    {...props}
  >
    {children}
  </RadixAlertDialog.Title>
));
AlertDialogTitle.displayName = 'AlertDialog.Title';

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Description>,
  AlertDialogDescriptionProps
>(({ children, className, ...props }, ref) => (
  <RadixAlertDialog.Description 
    ref={ref}
    className={`text-sm text-gray-600 ${className}`} 
    {...props}
  >
    {children}
  </RadixAlertDialog.Description>
));
AlertDialogDescription.displayName = 'AlertDialog.Description';

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Action>,
  AlertDialogActionProps
>(({ children, className, ...props }, ref) => (
  <RadixAlertDialog.Action 
    ref={ref}
    className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ${className}`} 
    {...props}
  >
    {children}
  </RadixAlertDialog.Action>
));
AlertDialogAction.displayName = 'AlertDialog.Action';

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Cancel>,
  AlertDialogCancelProps
>(({ children, className, ...props }, ref) => (
  <RadixAlertDialog.Cancel 
    ref={ref}
    className={`px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${className}`} 
    {...props}
  >
    {children}
  </RadixAlertDialog.Cancel>
));
AlertDialogCancel.displayName = 'AlertDialog.Cancel';

// Create compound component
const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});

export default AlertDialog;