import * as ShadcnAlertDialog from './shadcn';
import * as NeobrutalismAlertDialog from './neobrutalism';

export type SkinType = 'shadcn' | 'neobrutalism';

const getSkin = (): SkinType => {
  // This can be configured via environment variable, context, or any other method
  const skin = process.env.ORCHID_SKIN || 'shadcn';
  return skin as SkinType;
};

export const AlertDialog = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialog>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialog {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialog {...props} />;
};

export const AlertDialogTrigger = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogTrigger>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogTrigger {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogTrigger {...props} />;
};

export const AlertDialogContent = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogContent>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogContent {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogContent {...props} />;
};

export const AlertDialogHeader = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogHeader>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogHeader {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogHeader {...props} />;
};

export const AlertDialogFooter = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogFooter>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogFooter {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogFooter {...props} />;
};

export const AlertDialogTitle = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogTitle>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogTitle {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogTitle {...props} />;
};

export const AlertDialogDescription = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogDescription>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogDescription {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogDescription {...props} />;
};

export const AlertDialogAction = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogAction>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogAction {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogAction {...props} />;
};

export const AlertDialogCancel = (props: React.ComponentProps<typeof ShadcnAlertDialog.AlertDialogCancel>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAlertDialog.AlertDialogCancel {...props} />;
  }
  
  return <ShadcnAlertDialog.AlertDialogCancel {...props} />;
};