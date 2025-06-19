import * as React from 'react';
import { Badge as ShadcnBadgeComponent, type BadgeProps as ShadcnBadgeProps } from './shadcn';
import { Badge as NeobrutalismBadgeComponent, type BadgeProps as NeobrutalismBadgeProps } from './neobrutalism';
import { type WithSkinProps } from '../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../lib/constants';

// Union type of all possible badge props across ui
type BadgeProps =
  | (ShadcnBadgeProps & WithSkinProps & { skin?: typeof SKINS.SHADCN })
  | (NeobrutalismBadgeProps & WithSkinProps & { skin: typeof SKINS.NEOBRUTALISM });

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ skin = DEFAULT_SKIN, ...props }, ref) => {
    if (skin === SKINS.NEOBRUTALISM) {
      return <NeobrutalismBadgeComponent ref={ref} {...props as NeobrutalismBadgeProps} />;
    }

    return <ShadcnBadgeComponent ref={ref} {...props as ShadcnBadgeProps} />;
  },
);
Badge.displayName = 'Badge';

export { badgeVariants as shadcnBadgeVariants } from './shadcn';
export { badgeVariants as neobrutalismBadgeVariants } from './neobrutalism';