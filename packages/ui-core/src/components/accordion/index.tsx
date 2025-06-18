import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

export interface AccordionProps extends RadixAccordion.AccordionMultipleProps {
  children: React.ReactNode;
  className?: string;
}

export interface AccordionItemProps extends RadixAccordion.AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export interface AccordionHeaderProps extends RadixAccordion.AccordionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface AccordionTriggerProps extends RadixAccordion.AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface AccordionContentProps extends RadixAccordion.AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  AccordionProps
>(({ children, className, ...props }, ref) => {
  return (
    <RadixAccordion.Root ref={ref} className={`w-full ${className}`} {...props}>
      {children}
    </RadixAccordion.Root>
  );
});
AccordionRoot.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  AccordionItemProps
>(({ children, value, className, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className={`border-b border-gray-200 ${className}`}
    value={value}
    {...props}
  >
    {children}
  </RadixAccordion.Item>
));
AccordionItem.displayName = 'Accordion.Item';

const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Header>,
  AccordionHeaderProps
>(({ children, className, ...props }, ref) => (
  <RadixAccordion.Header ref={ref} className={`flex ${className}`} {...props}>
    {children}
  </RadixAccordion.Header>
));
AccordionHeader.displayName = 'Accordion.Header';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => (
  <RadixAccordion.Trigger
    ref={ref}
    className={`flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
    {...props}
  >
    {children}
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  </RadixAccordion.Trigger>
));
AccordionTrigger.displayName = 'Accordion.Trigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  AccordionContentProps
>(({ children, className, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={`overflow-hidden text-sm ${className}`}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </RadixAccordion.Content>
));
AccordionContent.displayName = 'Accordion.Content';

// Create compound component
const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export default Accordion;