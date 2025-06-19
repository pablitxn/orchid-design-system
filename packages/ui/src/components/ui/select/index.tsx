import * as ShadcnSelect from './shadcn';
import * as NeobrutalismSelect from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { type WithSkinProps } from '../../../lib/utils.ts';
import { DEFAULT_SKIN, SKINS } from '../../../lib/constants.ts';
// @ts-ignore
import { type ComponentProps } from 'react';

const selectComponents = {
  [SKINS.SHADCN]: {
    Select: ShadcnSelect.Index,
    SelectGroup: ShadcnSelect.SelectGroup,
    SelectValue: ShadcnSelect.SelectValue,
    SelectTrigger: ShadcnSelect.SelectTrigger,
    SelectContent: ShadcnSelect.SelectContent,
    SelectLabel: ShadcnSelect.SelectLabel,
    SelectItem: ShadcnSelect.SelectItem,
    SelectSeparator: ShadcnSelect.SelectSeparator,
    SelectScrollUpButton: ShadcnSelect.SelectScrollUpButton,
    SelectScrollDownButton: ShadcnSelect.SelectScrollDownButton,
  },
  [SKINS.NEOBRUTALISM]: NeobrutalismSelect,
} as const;

export type SelectProps = ComponentProps<typeof ShadcnSelect.Index> & WithSkinProps;
export type SelectGroupProps = ComponentProps<typeof ShadcnSelect.SelectGroup> & WithSkinProps;
export type SelectValueProps = ComponentProps<typeof ShadcnSelect.SelectValue> & WithSkinProps;
export type SelectTriggerProps = ComponentProps<typeof ShadcnSelect.SelectTrigger> & WithSkinProps;
export type SelectContentProps = ComponentProps<typeof ShadcnSelect.SelectContent> & WithSkinProps;
export type SelectLabelProps = ComponentProps<typeof ShadcnSelect.SelectLabel> & WithSkinProps;
export type SelectItemProps = ComponentProps<typeof ShadcnSelect.SelectItem> & WithSkinProps;
export type SelectSeparatorProps = ComponentProps<typeof ShadcnSelect.SelectSeparator> & WithSkinProps;
export type SelectScrollUpButtonProps = ComponentProps<typeof ShadcnSelect.SelectScrollUpButton> & WithSkinProps;
export type SelectScrollDownButtonProps = ComponentProps<typeof ShadcnSelect.SelectScrollDownButton> & WithSkinProps;

export const Select = ({ skin = DEFAULT_SKIN, ...props }: SelectProps) => {
  const components = getSkinComponent(selectComponents, skin);
  // @ts-ignore
  return <components.Select {...props} />;
};

export const SelectGroup = ({ skin = DEFAULT_SKIN, ...props }: SelectGroupProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectGroup {...props} />;
};

export const SelectValue = ({ skin = DEFAULT_SKIN, ...props }: SelectValueProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectValue {...props} />;
};

export const SelectTrigger = ({ skin = DEFAULT_SKIN, ...props }: SelectTriggerProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectTrigger {...props} />;
};

export const SelectContent = ({ skin = DEFAULT_SKIN, ...props }: SelectContentProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectContent {...props} />;
};

export const SelectLabel = ({ skin = DEFAULT_SKIN, ...props }: SelectLabelProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectLabel {...props} />;
};

export const SelectItem = ({ skin = DEFAULT_SKIN, ...props }: SelectItemProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectItem {...props} />;
};

export const SelectSeparator = ({ skin = DEFAULT_SKIN, ...props }: SelectSeparatorProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectSeparator {...props} />;
};

export const SelectScrollUpButton = ({ skin = DEFAULT_SKIN, ...props }: SelectScrollUpButtonProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectScrollUpButton {...props} />;
};

export const SelectScrollDownButton = ({ skin = DEFAULT_SKIN, ...props }: SelectScrollDownButtonProps) => {
  const components = getSkinComponent(selectComponents, skin);
  return <components.SelectScrollDownButton {...props} />;
};