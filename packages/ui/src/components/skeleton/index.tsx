import * as ShadcnSkeleton from './shadcn';
import * as NeobrutalismSkeleton from './neobrutalism';
import { getSkinComponent } from '../../lib/getSkinComponent';
import { type WithSkinProps } from '../../lib/types';
import { DEFAULT_SKIN, SKINS } from '../../lib/constants';
import { type ComponentProps } from 'react';

const skeletonComponents = {
  [SKINS.SHADCN]: ShadcnSkeleton,
  [SKINS.NEOBRUTALISM]: NeobrutalismSkeleton,
} as const;

export type SkeletonProps = ComponentProps<typeof ShadcnSkeleton.Skeleton> & WithSkinProps;

export const Skeleton = ({ skin = DEFAULT_SKIN, ...props }: SkeletonProps) => {
  const components = getSkinComponent(skeletonComponents, skin);
  return <components.Skeleton {...props} />;
};