import * as ShadcnAvatar from './shadcn';
import * as NeobrutalismAvatar from './neobrutalism';
import { getSkinComponent, type SkinType, type WithSkinProps } from '../../lib/utils';

const avatarComponents = {
  shadcn: ShadcnAvatar,
  neobrutalism: NeobrutalismAvatar
} as const;

type AvatarProps = React.ComponentProps<typeof ShadcnAvatar.Avatar> & WithSkinProps;
type AvatarImageProps = React.ComponentProps<typeof ShadcnAvatar.AvatarImage> & WithSkinProps;
type AvatarFallbackProps = React.ComponentProps<typeof ShadcnAvatar.AvatarFallback> & WithSkinProps;

export const Avatar = ({ skin = 'shadcn', ...props }: AvatarProps) => {
  const components = getSkinComponent(avatarComponents, skin);
  return <components.Avatar {...props} />;
};

export const AvatarImage = ({ skin = 'shadcn', ...props }: AvatarImageProps) => {
  const components = getSkinComponent(avatarComponents, skin);
  return <components.AvatarImage {...props} />;
};

export const AvatarFallback = ({ skin = 'shadcn', ...props }: AvatarFallbackProps) => {
  const components = getSkinComponent(avatarComponents, skin);
  return <components.AvatarFallback {...props} />;
};