import * as ShadcnScrollArea from './shadcn';
import * as NeobrutalismScrollArea from './neobrutalism';
import { getSkinComponent } from '../../lib/getSkinComponent';
import { type WithSkinProps } from '../../lib/utils';
import { DEFAULT_SKIN, SKINS } from '../../lib/constants';
import { type ComponentProps } from 'react';

const scrollAreaComponents = {
  [SKINS.SHADCN]: {
    ScrollArea: ShadcnScrollArea.Index,
    ScrollBar: ShadcnScrollArea.ScrollBar,
  },
  [SKINS.NEOBRUTALISM]: NeobrutalismScrollArea,
} as const;

export type ScrollAreaProps = ComponentProps<typeof ShadcnScrollArea.Index> & WithSkinProps;
export type ScrollBarProps = ComponentProps<typeof ShadcnScrollArea.ScrollBar> & WithSkinProps;

export const ScrollArea = ({ skin = DEFAULT_SKIN, ...props }: ScrollAreaProps) => {
  // @ts-ignore

  const components = getSkinComponent(scrollAreaComponents, skin);
  return <components.ScrollArea {...props} />;
};

export const ScrollBar = ({ skin = DEFAULT_SKIN, ...props }: ScrollBarProps) => {
  // @ts-ignore

  const components = getSkinComponent(scrollAreaComponents, skin);
  return <components.ScrollBar {...props} />;
};