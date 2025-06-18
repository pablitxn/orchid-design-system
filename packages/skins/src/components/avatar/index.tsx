import * as ShadcnAvatar from './shadcn';
import * as NeobrutalismAvatar from './neobrutalism';
import { getSkinComponent, type SkinType, type WithSkinProps } from '@/lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

const avatarComponents = {
  [SKINS.SHADCN]: ShadcnAvatar,
  [SKINS.NEOBRUTALISM]: NeobrutalismAvatar,
} as const;

type AvatarProps = React.ComponentProps<typeof ShadcnAvatar.Avatar> & WithSkinProps;
type AvatarImageProps = React.ComponentProps<typeof ShadcnAvatar.AvatarImage> & WithSkinProps;
type AvatarFallbackProps = React.ComponentProps<typeof ShadcnAvatar.AvatarFallback> & WithSkinProps;

export const Avatar = ({ skin = DEFAULT_SKIN, ...props }: AvatarProps) => {
  const components = getSkinComponent(avatarComponents, skin);
  return <components.Avatar {...props} />;
};

export const AvatarImage = ({ skin = DEFAULT_SKIN, ...props }: AvatarImageProps) => {
  const components = getSkinComponent(avatarComponents, skin);
  return <components.AvatarImage {...props} />;
};

export const AvatarFallback = ({ skin = DEFAULT_SKIN, ...props }: AvatarFallbackProps) => {
  const components = getSkinComponent(avatarComponents, skin);
  return <components.AvatarFallback {...props} />;
};