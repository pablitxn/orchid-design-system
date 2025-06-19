import * as React from 'react';
import * as ShadcnTextarea from './shadcn';
import * as NeobrutalismTextarea from './neobrutalism';
import { getSkinComponent } from '../../../lib/getSkinComponent.tsx';
import { type WithSkinProps } from '../../../lib/utils.ts';
import { SKINS, DEFAULT_SKIN } from '../../../lib/constants.ts';

const textareaComponents = {
  [SKINS.SHADCN]: ShadcnTextarea,
  [SKINS.NEOBRUTALISM]: NeobrutalismTextarea,
} as const;

type TextareaProps = React.ComponentPropsWithRef<typeof ShadcnTextarea.Textarea> & WithSkinProps;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ skin = DEFAULT_SKIN, ...props }, ref) => {
    const components = getSkinComponent(textareaComponents, skin);
    return <components.Textarea ref={ref} {...props} />;
  }
);

Textarea.displayName = 'Textarea';