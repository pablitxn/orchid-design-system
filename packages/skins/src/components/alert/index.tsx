import * as ShadcnAlert from './shadcn';
import * as NeobrutalismAlert from './neobrutalism';

export type SkinType = 'shadcn' | 'neobrutalism';

const getSkin = (): SkinType => {
  // This can be configured via environment variable, context, or any other method
  const skin = process.env.ORCHID_SKIN || 'shadcn';
  return skin as SkinType;
};

export const Alert = (props: React.ComponentProps<typeof ShadcnAlert.Alert>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlert.Alert {...props} />;
  }
  
  return <ShadcnAlert.Alert {...props} />;
};

export const AlertTitle = (props: React.ComponentProps<typeof ShadcnAlert.AlertTitle>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlert.AlertTitle {...props} />;
  }
  
  return <ShadcnAlert.AlertTitle {...props} />;
};

export const AlertDescription = (props: React.ComponentProps<typeof ShadcnAlert.AlertDescription>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlert.AlertDescription {...props} />;
  }
  
  return <ShadcnAlert.AlertDescription {...props} />;
};