export const SKINS = {
  SHADCN: 'shadcn',
  NEOBRUTALISM: 'neobrutalism',
} as const;

export const DEFAULT_SKIN = SKINS.SHADCN;

export type SkinType = typeof SKINS[keyof typeof SKINS];