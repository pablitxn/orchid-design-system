import * as ShadcnAccordion from './shadcn';
import * as NeobrutalismAccordion from './neobrutalism';

export type SkinType = 'shadcn' | 'neobrutalism';

const getSkin = (): SkinType => {
  // This can be configured via environment variable, context, or any other method
  // @ts-ignore
  const skin = process.env.ORCHID_SKIN || 'shadcn';
  return skin as SkinType;
};

export const Accordion = (props: React.ComponentProps<typeof ShadcnAccordion.Accordion>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAccordion.Accordion {...props} />;
  }
  
  return <ShadcnAccordion.Accordion {...props} />;
};

export const AccordionItem = (props: React.ComponentProps<typeof ShadcnAccordion.AccordionItem>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAccordion.AccordionItem {...props} />;
  }
  
  return <ShadcnAccordion.AccordionItem {...props} />;
};

export const AccordionTrigger = (props: React.ComponentProps<typeof ShadcnAccordion.AccordionTrigger>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAccordion.AccordionTrigger {...props} />;
  }
  
  return <ShadcnAccordion.AccordionTrigger {...props} />;
};

export const AccordionContent = (props: React.ComponentProps<typeof ShadcnAccordion.AccordionContent>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAccordion.AccordionContent {...props} />;
  }
  
  return <ShadcnAccordion.AccordionContent {...props} />;
};