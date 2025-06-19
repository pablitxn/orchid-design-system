import { ComponentProps } from 'react';
import * as ShadcnTable from './shadcn';
import * as NeobrutalismTable from './neobrutalism';
import { getSkinComponent, type WithSkinProps } from '@/lib/utils';
import { SKINS, DEFAULT_SKIN } from '@/lib/constants';

const tableComponents = {
  [SKINS.SHADCN]: ShadcnTable,
  [SKINS.NEOBRUTALISM]: NeobrutalismTable,
} as const;

type TableProps = ComponentProps<typeof ShadcnTable.Table> & WithSkinProps;
type TableHeaderProps = ComponentProps<typeof ShadcnTable.TableHeader> & WithSkinProps;
type TableBodyProps = ComponentProps<typeof ShadcnTable.TableBody> & WithSkinProps;
type TableFooterProps = ComponentProps<typeof ShadcnTable.TableFooter> & WithSkinProps;
type TableHeadProps = ComponentProps<typeof ShadcnTable.TableHead> & WithSkinProps;
type TableRowProps = ComponentProps<typeof ShadcnTable.TableRow> & WithSkinProps;
type TableCellProps = ComponentProps<typeof ShadcnTable.TableCell> & WithSkinProps;
type TableCaptionProps = ComponentProps<typeof ShadcnTable.TableCaption> & WithSkinProps;

export const Table = ({ skin = DEFAULT_SKIN, ...props }: TableProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.Table {...props} />;
};

export const TableHeader = ({ skin = DEFAULT_SKIN, ...props }: TableHeaderProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableHeader {...props} />;
};

export const TableBody = ({ skin = DEFAULT_SKIN, ...props }: TableBodyProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableBody {...props} />;
};

export const TableFooter = ({ skin = DEFAULT_SKIN, ...props }: TableFooterProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableFooter {...props} />;
};

export const TableHead = ({ skin = DEFAULT_SKIN, ...props }: TableHeadProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableHead {...props} />;
};

export const TableRow = ({ skin = DEFAULT_SKIN, ...props }: TableRowProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableRow {...props} />;
};

export const TableCell = ({ skin = DEFAULT_SKIN, ...props }: TableCellProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableCell {...props} />;
};

export const TableCaption = ({ skin = DEFAULT_SKIN, ...props }: TableCaptionProps) => {
  // @ts-ignore
  const components = getSkinComponent(tableComponents, skin);
  return <components.TableCaption {...props} />;
};