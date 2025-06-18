import * as React from 'react';
import * as ShadcnBadge from './shadcn';
import * as NeobrutalismBadge from './neobrutalism';
import { type SkinType, type WithSkinProps } from '../../lib/utils';

// Union type of all possible badge props across skins
type BadgeProps = 
  | (ShadcnBadge.BadgeProps & WithSkinProps & { skin?: 'shadcn' })
  | (NeobrutalismBadge.BadgeProps & WithSkinProps & { skin: 'neobrutalism' });

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ skin = 'shadcn', ...props }, ref) => {
    if (skin === 'neobrutalism') {
      return <NeobrutalismBadge.Badge ref={ref} {...props as NeobrutalismBadge.BadgeProps} />;
    }
    
    return <ShadcnBadge.Badge ref={ref} {...props as ShadcnBadge.BadgeProps} />;
  }
);
Badge.displayName = 'Badge';

export { badgeVariants as shadcnBadgeVariants } from './shadcn';
export { badgeVariants as neobrutalismBadgeVariants } from './neobrutalism';