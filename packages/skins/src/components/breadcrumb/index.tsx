import * as ShadcnBreadcrumb from './shadcn';
import * as NeobrutalismBreadcrumb from './neobrutalism';
import { getSkinComponent,} from '../../lib/getSkinComponent';
import { SKINS } from '../../lib/constants';
import type { WithSkinProps } from '../../lib/types';

import { type ComponentProps } from 'react';

const DEFAULT_SKIN = SKINS.SHADCN;

const breadcrumbComponents = {
  [SKINS.SHADCN]: ShadcnBreadcrumb,
  [SKINS.NEOBRUTALISM]: NeobrutalismBreadcrumb,
} as const;

export type BreadcrumbProps = ComponentProps<typeof ShadcnBreadcrumb.Breadcrumb> & WithSkinProps;
export type BreadcrumbListProps = ComponentProps<typeof ShadcnBreadcrumb.BreadcrumbList> & WithSkinProps;
export type BreadcrumbItemProps = ComponentProps<typeof ShadcnBreadcrumb.BreadcrumbItem> & WithSkinProps;
export type BreadcrumbLinkProps = ComponentProps<typeof ShadcnBreadcrumb.BreadcrumbLink> & WithSkinProps;
export type BreadcrumbPageProps = ComponentProps<typeof ShadcnBreadcrumb.BreadcrumbPage> & WithSkinProps;
export type BreadcrumbSeparatorProps = ComponentProps<typeof ShadcnBreadcrumb.BreadcrumbSeparator> & WithSkinProps;
export type BreadcrumbEllipsisProps = ComponentProps<typeof ShadcnBreadcrumb.BreadcrumbEllipsis> & WithSkinProps;

export const Breadcrumb = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.Breadcrumb {...props} />;
};

export const BreadcrumbList = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbListProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.BreadcrumbList {...props} />;
};

export const BreadcrumbItem = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbItemProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.BreadcrumbItem {...props} />;
};

export const BreadcrumbLink = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbLinkProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.BreadcrumbLink {...props} />;
};

export const BreadcrumbPage = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbPageProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.BreadcrumbPage {...props} />;
};

export const BreadcrumbSeparator = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbSeparatorProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.BreadcrumbSeparator {...props} />;
};

export const BreadcrumbEllipsis = ({ skin = DEFAULT_SKIN, ...props }: BreadcrumbEllipsisProps) => {
  const components = getSkinComponent(breadcrumbComponents, skin);
  return <components.BreadcrumbEllipsis {...props} />;
};