import {ReactNode, FC} from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

interface AccordionProps extends RadixAccordion.AccordionMultipleProps {
  children: ReactNode;
  className?: string;
}

interface AccordionItemProps extends RadixAccordion.AccordionItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

interface AccordionHeaderProps extends RadixAccordion.AccordionHeaderProps {
  children: ReactNode;
  className?: string;
}

interface AccordionTriggerProps extends RadixAccordion.AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

interface AccordionContentProps extends RadixAccordion.AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const Accordion: FC<AccordionProps> & {
  Item: FC<AccordionItemProps>;
  Header: FC<AccordionHeaderProps>;
  Trigger: FC<AccordionTriggerProps>;
  Content: FC<AccordionContentProps>;
} = ({children, className, ...props}) => {
  return (
    <RadixAccordion.Root className={`w-full ${className}`} {...props}>
      {children}
    </RadixAccordion.Root>
  );
};

Accordion.Item = ({children, value, className, ...props}) => (
  <RadixAccordion.Item
    className={`border-b border-gray-200 ${className}`}
    value={value}
    {...props}
  >
    {children}
  </RadixAccordion.Item>
);

Accordion.Header = ({children, className, ...props}) => (
  <RadixAccordion.Header className={`flex ${className}`} {...props}>
    {children}
  </RadixAccordion.Header>
);

Accordion.Trigger = ({children, className, ...props}) => (
  <RadixAccordion.Trigger
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
);

Accordion.Content = ({children, className, ...props}) => (
  <RadixAccordion.Content
    className={`overflow-hidden text-sm ${className}`}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </RadixAccordion.Content>
);

export default Accordion;