import * as ShadcnAccordion from './shadcn';
import * as NeobrutalismAccordion from './neobrutalism';
import { getSkinComponent, type SkinType, type WithSkinProps } from '../../lib/utils';

const accordionComponents = {
  shadcn: ShadcnAccordion,
  neobrutalism: NeobrutalismAccordion
} as const;

type AccordionProps = React.ComponentProps<typeof ShadcnAccordion.Accordion> & WithSkinProps;
type AccordionItemProps = React.ComponentProps<typeof ShadcnAccordion.AccordionItem> & WithSkinProps;
type AccordionTriggerProps = React.ComponentProps<typeof ShadcnAccordion.AccordionTrigger> & WithSkinProps;
type AccordionContentProps = React.ComponentProps<typeof ShadcnAccordion.AccordionContent> & WithSkinProps;

export const Accordion = ({ skin = 'shadcn', ...props }: AccordionProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.Accordion {...props} />;
};

export const AccordionItem = ({ skin = 'shadcn', ...props }: AccordionItemProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.AccordionItem {...props} />;
};

export const AccordionTrigger = ({ skin = 'shadcn', ...props }: AccordionTriggerProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.AccordionTrigger {...props} />;
};

export const AccordionContent = ({ skin = 'shadcn', ...props }: AccordionContentProps) => {
  const components = getSkinComponent(accordionComponents, skin);
  return <components.AccordionContent {...props} />;
};