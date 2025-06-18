import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type SkinType as ImportedSkinType, DEFAULT_SKIN } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SkinType = ImportedSkinType;

export interface WithSkinProps {
  skin?: SkinType;
}

export function getSkinComponent<T extends Record<string, any>>(
  components: Record<SkinType, T>,
  skin: SkinType = DEFAULT_SKIN
): T {
  return components[skin];
}
