import * as ShadcnBadge from './shadcn';
import * as NeobrutalismBadge from './neobrutalism';

export type SkinType = 'shadcn' | 'neobrutalism';

const getSkin = (): SkinType => {
  // This can be configured via environment variable, context, or any other method
  const skin = process.env.ORCHID_SKIN || 'shadcn';
  return skin as SkinType;
};

export const Badge = (props: React.ComponentProps<typeof ShadcnBadge.Badge>) => {
  const skin = getSkin();
  
  if (skin === 'neobrutalism') {
    return <NeobrutalismBadge.Badge {...props} />;
  }
  
  return <ShadcnBadge.Badge {...props} />;
};

export { badgeVariants as shadcnBadgeVariants } from './shadcn';
export { badgeVariants as neobrutalismBadgeVariants } from './neobrutalism';