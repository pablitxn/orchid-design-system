import { ComponentProps } from 'react';
import * as ShadcnTabs from './shadcn';
import * as NeobrutalismTabs from './neobrutalism';
import { getSkinComponent, type WithSkinProps } from '@/lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

// @ts-ignore
const tabsComponents = {
  [SKINS.SHADCN]: ShadcnTabs,
  [SKINS.NEOBRUTALISM]: NeobrutalismTabs,
} as const;

type TabsProps = ComponentProps<typeof ShadcnTabs.Tabs> & WithSkinProps;
type TabsListProps = ComponentProps<typeof ShadcnTabs.TabsList> & WithSkinProps;
type TabsTriggerProps = ComponentProps<typeof ShadcnTabs.TabsTrigger> & WithSkinProps;
type TabsContentProps = ComponentProps<typeof ShadcnTabs.TabsContent> & WithSkinProps;

export const Tabs = ({ skin = DEFAULT_SKIN, ...props }: TabsProps) => {
  // @ts-ignore
  const components = getSkinComponent(tabsComponents, skin);
  return <components.Tabs {...props} />;
};

export const TabsList = ({ skin = DEFAULT_SKIN, ...props }: TabsListProps) => {
  // @ts-ignore
  const components = getSkinComponent(tabsComponents, skin);
  return <components.TabsList {...props} />;
};

export const TabsTrigger = ({ skin = DEFAULT_SKIN, ...props }: TabsTriggerProps) => {
  // @ts-ignore
  const components = getSkinComponent(tabsComponents, skin);
  return <components.TabsTrigger {...props} />;
};

export const TabsContent = ({ skin = DEFAULT_SKIN, ...props }: TabsContentProps) => {
  // @ts-ignore
  const components = getSkinComponent(tabsComponents, skin);
  return <components.TabsContent {...props} />;
};