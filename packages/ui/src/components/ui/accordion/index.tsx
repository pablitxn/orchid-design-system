import { ComponentProps } from 'react';
import * as ShadcnAccordion from './shadcn';
import * as NeobrutalismAccordion from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { type WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

const accordionComponents = {
  [SKINS.SHADCN]: ShadcnAccordion,
  [SKINS.NEOBRUTALISM]: NeobrutalismAccordion,
} as const;

type AccordionProps = ComponentProps<typeof ShadcnAccordion.Accordion> & WithSkinProps;
type AccordionItemProps = ComponentProps<typeof ShadcnAccordion.AccordionItem> & WithSkinProps;
type AccordionTriggerProps = ComponentProps<typeof ShadcnAccordion.AccordionTrigger> & WithSkinProps;
type AccordionContentProps = ComponentProps<typeof ShadcnAccordion.AccordionContent> & WithSkinProps;

export const Accordion = ({ skin = DEFAULT_SKIN, ...props }: AccordionProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.Accordion {...props} />;
};

export const AccordionItem = ({ skin = DEFAULT_SKIN, ...props }: AccordionItemProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.AccordionItem {...props} />;
};

export const AccordionTrigger = ({ skin = DEFAULT_SKIN, ...props }: AccordionTriggerProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.AccordionTrigger {...props} />;
};

export const AccordionContent = ({ skin = DEFAULT_SKIN, ...props }: AccordionContentProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.AccordionContent {...props} />;
};