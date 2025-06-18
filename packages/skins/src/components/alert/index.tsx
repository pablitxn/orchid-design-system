import * as ShadcnAlert from './shadcn';
import * as NeobrutalismAlert from './neobrutalism';
import { getSkinComponent, type WithSkinProps } from '@/lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

const alertComponents = {
  [SKINS.SHADCN]: ShadcnAlert,
  [SKINS.NEOBRUTALISM]: NeobrutalismAlert
} as const;

type AlertProps = React.ComponentProps<typeof ShadcnAlert.Alert> & WithSkinProps;
type AlertTitleProps = React.ComponentProps<typeof ShadcnAlert.AlertTitle> & WithSkinProps;
type AlertDescriptionProps = React.ComponentProps<typeof ShadcnAlert.AlertDescription> & WithSkinProps;

export const Alert = ({ skin = DEFAULT_SKIN, ...props }: AlertProps) => {
  const components = getSkinComponent(alertComponents, skin);
  return <components.Alert {...props} />;
};

export const AlertTitle = ({ skin = DEFAULT_SKIN, ...props }: AlertTitleProps) => {
  const components = getSkinComponent(alertComponents, skin);
  return <components.AlertTitle {...props} />;
};

export const AlertDescription = ({ skin = DEFAULT_SKIN, ...props }: AlertDescriptionProps) => {
  const components = getSkinComponent(alertComponents, skin);
  return <components.AlertDescription {...props} />;
};