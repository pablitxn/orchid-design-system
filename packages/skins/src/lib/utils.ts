import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SkinType = 'shadcn' | 'neobrutalism';

export interface WithSkinProps {
  skin?: SkinType;
}

export function getSkinComponent<T extends Record<string, any>>(
  components: Record<SkinType, T>,
  skin: SkinType = 'shadcn'
): T {
  return components[skin];
}
