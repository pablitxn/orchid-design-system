import * as ShadcnAvatar from './shadcn';
import * as NeobrutalismAvatar from './neobrutalism';

export type SkinType = 'shadcn' | 'neobrutalism';

const getSkin = (): SkinType => {
  // This can be configured via environment variable, context, or any other method
  const skin = process.env.ORCHID_SKIN || 'shadcn';
  return skin as SkinType;
};

export const Avatar = (props: React.ComponentProps<typeof ShadcnAvatar.Avatar>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAvatar.Avatar {...props} />;
  }
  
  return <ShadcnAvatar.Avatar {...props} />;
};

export const AvatarImage = (props: React.ComponentProps<typeof ShadcnAvatar.AvatarImage>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAvatar.AvatarImage {...props} />;
  }
  
  return <ShadcnAvatar.AvatarImage {...props} />;
};

export const AvatarFallback = (props: React.ComponentProps<typeof ShadcnAvatar.AvatarFallback>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismAvatar.AvatarFallback {...props} />;
  }
  
  return <ShadcnAvatar.AvatarFallback {...props} />;
};