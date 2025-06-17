import React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';

interface AlertDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface AlertDialogTriggerProps extends RadixAlertDialog.AlertDialogTriggerProps {
  children: React.ReactNode;
}

interface AlertDialogContentProps extends RadixAlertDialog.AlertDialogContentProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogTitleProps extends RadixAlertDialog.AlertDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogDescriptionProps extends RadixAlertDialog.AlertDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogActionProps extends RadixAlertDialog.AlertDialogActionProps {
  children: React.ReactNode;
  className?: string;
}

interface AlertDialogCancelProps extends RadixAlertDialog.AlertDialogCancelProps {
  children: React.ReactNode;
  className?: string;
}

const AlertDialog: React.FC<AlertDialogProps> & {
  Trigger: React.FC<AlertDialogTriggerProps>;
  Content: React.FC<AlertDialogContentProps>;
  Title: React.FC<AlertDialogTitleProps>;
  Description: React.FC<AlertDialogDescriptionProps>;
  Action: React.FC<AlertDialogActionProps>;
  Cancel: React.FC<AlertDialogCancelProps>;
} = ({ children, open, onOpenChange }) => {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixAlertDialog.Root>
  );
};

AlertDialog.Trigger = ({ children, ...props }) => (
  <RadixAlertDialog.Trigger {...props}>{children}</RadixAlertDialog.Trigger>
);

AlertDialog.Content = ({ children, className, ...props }) => (
  <RadixAlertDialog.Portal>
    <RadixAlertDialog.Overlay className="fixed inset-0 bg-black/50" />
    <RadixAlertDialog.Content className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 ${className}`} {...props}>
      {children}
    </RadixAlertDialog.Content>
  </RadixAlertDialog.Portal>
);

AlertDialog.Title = ({ children, className, ...props }) => (
  <RadixAlertDialog.Title className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </RadixAlertDialog.Title>
);

AlertDialog.Description = ({ children, className, ...props }) => (
  <RadixAlertDialog.Description className={`text-sm text-gray-600 ${className}`} {...props}>
    {children}
  </RadixAlertDialog.Description>
);

AlertDialog.Action = ({ children, className, ...props }) => (
  <RadixAlertDialog.Action className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ${className}`} {...props}>
    {children}
  </RadixAlertDialog.Action>
);

AlertDialog.Cancel = ({ children, className, ...props }) => (
  <RadixAlertDialog.Cancel className={`px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${className}`} {...props}>
    {children}
  </RadixAlertDialog.Cancel>
);

export default AlertDialog;