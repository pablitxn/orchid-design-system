import * as React from 'react';
import { Index as ShadcnButton } from './shadcn';
import { Button as NeobrutalismButton } from './neobrutalism';
import { type WithSkinProps } from '../../lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

type ShadcnButtonProps = React.ComponentProps<typeof ShadcnButton>;
type NeobrutalismButtonProps = React.ComponentProps<typeof NeobrutalismButton>;

type ButtonProps = WithSkinProps & (
  | ({ skin?: typeof SKINS.SHADCN } & ShadcnButtonProps)
  | ({ skin: typeof SKINS.NEOBRUTALISM } & NeobrutalismButtonProps)
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  if (props.skin === SKINS.NEOBRUTALISM) {
    const { skin, ...restProps } = props;
    return <NeobrutalismButton ref={ref} {...restProps as NeobrutalismButtonProps} />;
  }
  const { skin, ...restProps } = props;
  return <ShadcnButton ref={ref} {...restProps as ShadcnButtonProps} />;
});

Button.displayName = 'Button';