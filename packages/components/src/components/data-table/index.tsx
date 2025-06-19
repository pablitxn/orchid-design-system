import * as React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Input,
  type WithSkinProps,
  DEFAULT_SKIN,
  SKINS,
} from '@orchid-design-system/skins';

interface DataTableProps<T = any> extends WithSkinProps {
  data: T[];
  columns: Column<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  onRowClick?: (row: T) => void;
  className?: string;
}

interface Column<T = any> {
  key: string;
  header: string;
  accessor: (row: T) => React.ReactNode;
  width?: string;
  sortable?: boolean;
}

interface DataTableContextValue {
  skin?: keyof typeof SKINS;
}

const DataTableContext = React.createContext<DataTableContextValue>({});

const useDataTable = () => {
  const context = React.useContext(DataTableContext);
  if (!context) {
    throw new Error('DataTable components must be used within a DataTable');
  }
  return context;
};

export const DataTable = <T extends Record<string, any>>({
                                                           data,
                                                           columns,
                                                           searchable = false,
                                                           searchPlaceholder = 'Search...',
                                                           onRowClick,
                                                           className,
                                                           skin = DEFAULT_SKIN,
                                                         }: DataTableProps<T>) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const filteredData = React.useMemo(() => {
    let filtered = [...data];

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === bValue) return 0;

        const comparison = aValue < bValue ? -1 : 1;
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      });
    }

    return filtered;
  }, [data, searchTerm, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: 'asc' };
      }
      if (current.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return null;
    });
  };

  return (
    // @ts-ignore
    <DataTableContext.Provider value={{ skin }}>
      <Card skin={skin} className={className}>
        {searchable && (
          <CardHeader skin={skin}>
            <div className="flex items-center gap-4">
              <Input
                skin={skin}
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </CardHeader>
        )}
        <CardContent skin={skin} className="p-0">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <DataTableHeader skin={skin}>
                <DataTableRow skin={skin}>
                  {columns.map((column) => (
                    <DataTableHead
                      key={column.key}
                      skin={skin}
                      onClick={() => column.sortable && handleSort(column.key)}
                      sortable={column.sortable}
                      sorted={sortConfig?.key === column.key}
                      sortDirection={
                        sortConfig?.key === column.key
                          ? sortConfig.direction
                          : undefined
                      }
                      style={{ width: column.width }}
                    >
                      {column.header}
                    </DataTableHead>
                  ))}
                </DataTableRow>
              </DataTableHeader>
              <DataTableBody skin={skin}>
                {filteredData.map((row, index) => (
                  <DataTableRow
                    key={index}
                    skin={skin}
                    onClick={() => onRowClick?.(row)}
                    clickable={!!onRowClick}
                  >
                    {columns.map((column) => (
                      <DataTableCell key={column.key} skin={skin}>
                        {column.accessor(row)}
                      </DataTableCell>
                    ))}
                  </DataTableRow>
                ))}
              </DataTableBody>
            </table>
            {filteredData.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No data found
              </div>
            )}
          </div>
        </CardContent>
        {filteredData.length > 0 && (
          <CardFooter skin={skin} className="text-sm text-muted-foreground">
            Showing {filteredData.length} of {data.length} rows
          </CardFooter>
        )}
      </Card>
    </DataTableContext.Provider>
  );
};

interface DataTableHeaderProps extends WithSkinProps {
  children: React.ReactNode;
  className?: string;
}

export const DataTableHeader: React.FC<DataTableHeaderProps> = ({
                                                                  children,
                                                                  className,
                                                                  skin: propSkin,
                                                                }) => {
  const { skin: contextSkin } = useDataTable();
  const skin = propSkin ?? contextSkin ?? DEFAULT_SKIN;

  const baseClasses = 'text-xs text-muted-foreground font-medium uppercase tracking-wider';
  const skinClasses = {
    [SKINS.SHADCN]: 'bg-muted/50',
    [SKINS.NEOBRUTALISM]: 'bg-yellow-100 border-b-4 border-black',
  };

  return (
    <thead className={`${baseClasses} ${skinClasses[skin]} ${className || ''}`}>
    {children}
    </thead>
  );
};

interface DataTableBodyProps extends WithSkinProps {
  children: React.ReactNode;
  className?: string;
}

export const DataTableBody: React.FC<DataTableBodyProps> = ({
                                                              children,
                                                              className,
                                                              skin: propSkin,
                                                            }) => {
  const { skin: contextSkin } = useDataTable();
  const skin = propSkin ?? contextSkin ?? DEFAULT_SKIN;

  const baseClasses = 'divide-y';
  const skinClasses = {
    [SKINS.SHADCN]: 'divide-border bg-background',
    [SKINS.NEOBRUTALISM]: 'divide-black bg-white',
  };

  return (
    <tbody className={`${baseClasses} ${skinClasses[skin]} ${className || ''}`}>
    {children}
    </tbody>
  );
};

interface DataTableRowProps extends WithSkinProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
}

export const DataTableRow: React.FC<DataTableRowProps> = ({
                                                            children,
                                                            className,
                                                            onClick,
                                                            clickable,
                                                            skin: propSkin,
                                                          }) => {
  const { skin: contextSkin } = useDataTable();
  const skin = propSkin ?? contextSkin ?? DEFAULT_SKIN;

  const baseClasses = 'transition-colors';
  const skinClasses = {
    [SKINS.SHADCN]: clickable
      ? 'hover:bg-muted/50 cursor-pointer'
      : '',
    [SKINS.NEOBRUTALISM]: clickable
      ? 'hover:bg-pink-100 cursor-pointer'
      : '',
  };

  return (
    <tr
      className={`${baseClasses} ${skinClasses[skin]} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

interface DataTableHeadProps extends WithSkinProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  sortable?: boolean;
  sorted?: boolean;
  sortDirection?: 'asc' | 'desc';
  style?: React.CSSProperties;
}

export const DataTableHead: React.FC<DataTableHeadProps> = ({
                                                              children,
                                                              className,
                                                              onClick,
                                                              sortable,
                                                              sorted,
                                                              sortDirection,
                                                              style,
                                                              skin: propSkin,
                                                            }) => {
  const { skin: contextSkin } = useDataTable();
  const skin = propSkin ?? contextSkin ?? DEFAULT_SKIN;

  const baseClasses = 'px-6 py-3';
  const skinClasses = {
    [SKINS.SHADCN]: sortable ? 'cursor-pointer select-none' : '',
    [SKINS.NEOBRUTALISM]: sortable ? 'cursor-pointer select-none font-bold' : 'font-bold',
  };

  return (
    <th
      className={`${baseClasses} ${skinClasses[skin]} ${className || ''}`}
      onClick={onClick}
      style={style}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <span className="text-xs">
            {sorted && sortDirection === 'asc' && '↑'}
            {sorted && sortDirection === 'desc' && '↓'}
            {!sorted && '↕'}
          </span>
        )}
      </div>
    </th>
  );
};

interface DataTableCellProps extends WithSkinProps {
  children: React.ReactNode;
  className?: string;
}

export const DataTableCell: React.FC<DataTableCellProps> = ({
                                                              children,
                                                              className,
                                                              skin: propSkin,
                                                            }) => {
  const { skin: contextSkin } = useDataTable();
  const skin = propSkin ?? contextSkin ?? DEFAULT_SKIN;

  const baseClasses = 'px-6 py-4';
  const skinClasses = {
    [SKINS.SHADCN]: 'text-sm',
    [SKINS.NEOBRUTALISM]: 'text-sm font-medium',
  };

  return (
    <td className={`${baseClasses} ${skinClasses[skin]} ${className || ''}`}>
      {children}
    </td>
  );
};

export const DataTableActions: React.FC<WithSkinProps & { children: React.ReactNode }> = ({
                                                                                            children,
                                                                                            skin: propSkin,
                                                                                          }) => {
  const { skin: contextSkin } = useDataTable();
  const skin = propSkin ?? contextSkin ?? DEFAULT_SKIN;

  return (
    <div className="flex items-center gap-2">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { skin } as any);
        }
        return child;
      })}
    </div>
  );
};