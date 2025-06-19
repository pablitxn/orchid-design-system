import * as ShadcnCard from './shadcn/card.tsx';
import * as NeobrutalismCard from './neobrutalism';
import { getSkinComponent } from '../../lib/getSkinComponent';
import { SKINS } from '../../lib/constants';
import { type ComponentProps } from 'react';
import type { WithSkinProps } from '../../lib/types';

const DEFAULT_SKIN = SKINS.SHADCN;

const cardComponents = {
  [SKINS.SHADCN]: ShadcnCard,
  [SKINS.NEOBRUTALISM]: NeobrutalismCard,
} as const;

export type CardProps = ComponentProps<typeof ShadcnCard.Card> & WithSkinProps;
export type CardHeaderProps = ComponentProps<typeof ShadcnCard.CardHeader> & WithSkinProps;
export type CardTitleProps = ComponentProps<typeof ShadcnCard.CardTitle> & WithSkinProps;
export type CardDescriptionProps = ComponentProps<typeof ShadcnCard.CardDescription> & WithSkinProps;
export type CardContentProps = ComponentProps<typeof ShadcnCard.CardContent> & WithSkinProps;
export type CardFooterProps = ComponentProps<typeof ShadcnCard.CardFooter> & WithSkinProps;

export const Card = ({ skin = DEFAULT_SKIN, ...props }: CardProps) => {
  const components = getSkinComponent(cardComponents, skin);
  return <components.Card {...props} />;
};

export const CardHeader = ({ skin = DEFAULT_SKIN, ...props }: CardHeaderProps) => {
  const components = getSkinComponent(cardComponents, skin);
  return <components.CardHeader {...props} />;
};

export const CardTitle = ({ skin = DEFAULT_SKIN, ...props }: CardTitleProps) => {
  const components = getSkinComponent(cardComponents, skin);
  return <components.CardTitle {...props} />;
};

export const CardDescription = ({ skin = DEFAULT_SKIN, ...props }: CardDescriptionProps) => {
  const components = getSkinComponent(cardComponents, skin);
  return <components.CardDescription {...props} />;
};

export const CardContent = ({ skin = DEFAULT_SKIN, ...props }: CardContentProps) => {
  const components = getSkinComponent(cardComponents, skin);
  return <components.CardContent {...props} />;
};

export const CardFooter = ({ skin = DEFAULT_SKIN, ...props }: CardFooterProps) => {
  const components = getSkinComponent(cardComponents, skin);
  return <components.CardFooter {...props} />;
};