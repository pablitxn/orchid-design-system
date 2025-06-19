import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps extends RadixDialog.DialogTriggerProps {
  children: React.ReactNode;
}

export interface DialogContentProps extends RadixDialog.DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogTitleProps extends RadixDialog.DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogDescriptionProps extends RadixDialog.DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogCloseProps extends RadixDialog.DialogCloseProps {
  children: React.ReactNode;
  className?: string;
}

const Dialog: React.FC<DialogProps> & {
  Trigger: React.FC<DialogTriggerProps>;
  Content: React.FC<DialogContentProps>;
  Title: React.FC<DialogTitleProps>;
  Description: React.FC<DialogDescriptionProps>;
  Close: React.FC<DialogCloseProps>;
} = ({ children, open, onOpenChange }) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
};

Dialog.Trigger = ({ children, ...props }) => (
  <RadixDialog.Trigger {...props}>{children}</RadixDialog.Trigger>
);

Dialog.Content = ({ children, className, ...props }) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="fixed inset-0 bg-black/50" />
    <RadixDialog.Content className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 ${className}`} {...props}>
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
);

Dialog.Title = ({ children, className, ...props }) => (
  <RadixDialog.Title className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </RadixDialog.Title>
);

Dialog.Description = ({ children, className, ...props }) => (
  <RadixDialog.Description className={`text-sm text-gray-600 ${className}`} {...props}>
    {children}
  </RadixDialog.Description>
);

Dialog.Close = ({ children, className, ...props }) => (
  <RadixDialog.Close className={`px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${className}`} {...props}>
    {children}
  </RadixDialog.Close>
);

export default Dialog;