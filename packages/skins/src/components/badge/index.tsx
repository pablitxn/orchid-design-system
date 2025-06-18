import * as React from 'react';
import { Badge as ShadcnBadgeComponent, type BadgeProps as ShadcnBadgeProps } from './shadcn';
import { Badge as NeobrutalismBadgeComponent, type BadgeProps as NeobrutalismBadgeProps } from './neobrutalism';
import { type SkinType, type WithSkinProps } from '../../lib/utils';

// Union type of all possible badge props across skins
type BadgeProps = 
  | (ShadcnBadgeProps & WithSkinProps & { skin?: 'shadcn' })
  | (NeobrutalismBadgeProps & WithSkinProps & { skin: 'neobrutalism' });

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ skin = 'shadcn', ...props }, ref) => {
    if (skin === 'neobrutalism') {
      return <NeobrutalismBadgeComponent ref={ref} {...props as NeobrutalismBadgeProps} />;
    }
    
    return <ShadcnBadgeComponent ref={ref} {...props as ShadcnBadgeProps} />;
  }
);
Badge.displayName = 'Badge';

export { badgeVariants as shadcnBadgeVariants } from './shadcn';
export { badgeVariants as neobrutalismBadgeVariants } from './neobrutalism';