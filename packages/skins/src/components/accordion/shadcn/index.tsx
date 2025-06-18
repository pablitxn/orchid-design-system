"use client"
import * as React from 'react';
import { Accordion } from '@orchid-design-system/ui-core';
import { ChevronDown } from 'lucide-react';

import { cn } from "@/lib/utils"

const AccordionRoot = Accordion;

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({className, ...props}, ref) => (
  <Accordion.Item ref={ref} className={cn('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({className, children, ...props}, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"/>
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({className, children, ...props}, ref) => (
  <Accordion.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

export {AccordionRoot as Accordion, AccordionItem, AccordionTrigger, AccordionContent};
