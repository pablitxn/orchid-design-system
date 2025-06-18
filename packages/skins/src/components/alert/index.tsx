import * as ShadcnAlert from './shadcn';
import * as NeobrutalismAlert from './neobrutalism';
import { getSkinComponent, type SkinType, type WithSkinProps } from '../../lib/utils';

const alertComponents = {
  shadcn: ShadcnAlert,
  neobrutalism: NeobrutalismAlert
} as const;

type AlertProps = React.ComponentProps<typeof ShadcnAlert.Alert> & WithSkinProps;
type AlertTitleProps = React.ComponentProps<typeof ShadcnAlert.AlertTitle> & WithSkinProps;
type AlertDescriptionProps = React.ComponentProps<typeof ShadcnAlert.AlertDescription> & WithSkinProps;

export const Alert = ({ skin = 'shadcn', ...props }: AlertProps) => {
  const components = getSkinComponent(alertComponents, skin);
  return <components.Alert {...props} />;
};

export const AlertTitle = ({ skin = 'shadcn', ...props }: AlertTitleProps) => {
  const components = getSkinComponent(alertComponents, skin);
  return <components.AlertTitle {...props} />;
};

export const AlertDescription = ({ skin = 'shadcn', ...props }: AlertDescriptionProps) => {
  const components = getSkinComponent(alertComponents, skin);
  return <components.AlertDescription {...props} />;
};