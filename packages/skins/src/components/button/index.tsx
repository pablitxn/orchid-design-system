import { Index as ShadcnButton } from './shadcn';
import { Button as NeobrutalismButton } from './neobrutalism';
import { type WithSkinProps } from '../../lib/utils';

type ShadcnButtonProps = React.ComponentProps<typeof ShadcnButton>;
type NeobrutalismButtonProps = React.ComponentProps<typeof NeobrutalismButton>;

type ButtonProps = WithSkinProps & (
  | ({ skin?: 'shadcn' } & ShadcnButtonProps)
  | ({ skin: 'neobrutalism' } & NeobrutalismButtonProps)
);

export const Button = (props: ButtonProps) => {
  if (props.skin === 'neobrutalism') {
    const { skin, ...restProps } = props;
    return <NeobrutalismButton {...restProps as NeobrutalismButtonProps} />;
  }
  const { skin, ...restProps } = props;
  return <ShadcnButton {...restProps as ShadcnButtonProps} />;
};