import * as React from 'react';
import * as ShadcnDropdownMenu from './shadcn';
import * as NeobrutalismDropdownMenu from './neobrutalism';
import { getSkinComponent } from '@/lib/getSkinComponent';
import { WithSkinProps } from '@/lib/types';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

const dropdownMenuComponents = {
  [SKINS.SHADCN]: ShadcnDropdownMenu,
  [SKINS.NEOBRUTALISM]: NeobrutalismDropdownMenu,
} as const;

export type DropdownMenuProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenu> & WithSkinProps;
export type DropdownMenuTriggerProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuTrigger> & WithSkinProps;
export type DropdownMenuContentProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuContent> & WithSkinProps;
export type DropdownMenuItemProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuItem> & WithSkinProps;
export type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuCheckboxItem> & WithSkinProps;
export type DropdownMenuRadioItemProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuRadioItem> & WithSkinProps;
export type DropdownMenuLabelProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuLabel> & WithSkinProps;
export type DropdownMenuSeparatorProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuSeparator> & WithSkinProps;
export type DropdownMenuShortcutProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuShortcut> & WithSkinProps;
export type DropdownMenuGroupProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuGroup> & WithSkinProps;
export type DropdownMenuPortalProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuPortal> & WithSkinProps;
export type DropdownMenuSubProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuSub> & WithSkinProps;
export type DropdownMenuSubContentProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuSubContent> & WithSkinProps;
export type DropdownMenuSubTriggerProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuSubTrigger> & WithSkinProps;
export type DropdownMenuRadioGroupProps = React.ComponentProps<typeof ShadcnDropdownMenu.DropdownMenuRadioGroup> & WithSkinProps;

export const DropdownMenu = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenu>,
  DropdownMenuProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenu;
  return <Component ref={ref} {...props} />;
});
DropdownMenu.displayName = 'DropdownMenu';

export const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuTrigger>,
  DropdownMenuTriggerProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuTrigger;
  return <Component ref={ref} {...props} />;
});
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuContent>,
  DropdownMenuContentProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuContent;
  return <Component ref={ref} {...props} />;
});
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuItem>,
  DropdownMenuItemProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuItem;
  return <Component ref={ref} {...props} />;
});
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuCheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuCheckboxItem;
  return <Component ref={ref} {...props} />;
});
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuRadioItem>,
  DropdownMenuRadioItemProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuRadioItem;
  return <Component ref={ref} {...props} />;
});
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuLabel>,
  DropdownMenuLabelProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuLabel;
  return <Component ref={ref} {...props} />;
});
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuSeparator>,
  DropdownMenuSeparatorProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuSeparator;
  return <Component ref={ref} {...props} />;
});
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export const DropdownMenuShortcut: React.FC<DropdownMenuShortcutProps> = ({ skin = DEFAULT_SKIN, ...props }) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuShortcut;
  return <Component {...props} />;
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({ skin = DEFAULT_SKIN, ...props }) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuGroup;
  return <Component {...props} />;
};
DropdownMenuGroup.displayName = 'DropdownMenuGroup';

export const DropdownMenuPortal: React.FC<DropdownMenuPortalProps> = ({ skin = DEFAULT_SKIN, ...props }) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuPortal;
  return <Component {...props} />;
};
DropdownMenuPortal.displayName = 'DropdownMenuPortal';

export const DropdownMenuSub: React.FC<DropdownMenuSubProps> = ({ skin = DEFAULT_SKIN, ...props }) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuSub;
  return <Component {...props} />;
};
DropdownMenuSub.displayName = 'DropdownMenuSub';

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuSubContent>,
  DropdownMenuSubContentProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuSubContent;
  return <Component ref={ref} {...props} />;
});
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownMenu.DropdownMenuSubTrigger>,
  DropdownMenuSubTriggerProps
>(({ skin = DEFAULT_SKIN, ...props }, ref) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuSubTrigger;
  return <Component ref={ref} {...props} />;
});
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupProps> = ({ skin = DEFAULT_SKIN, ...props }) => {
  const Component = getSkinComponent(dropdownMenuComponents, skin).DropdownMenuRadioGroup;
  return <Component {...props} />;
};
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup';