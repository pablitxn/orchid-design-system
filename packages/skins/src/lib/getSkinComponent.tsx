import React from 'react';
import { SKINS, type SkinType } from './constants';

interface ComponentMap {
  [SKINS.SHADCN]: any;
  [SKINS.NEOBRUTALISM]: any;
}

export function getSkinComponent<T extends ComponentMap>(
  components: T,
  skin: SkinType,
  defaultSkin: SkinType = SKINS.SHADCN
): T[keyof T] {
  return components[skin] || components[defaultSkin];
}