import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableContext from './TableContext';

interface ITableProps {
  padding?: string;
  size?: string;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
}

export const Table: React.FunctionComponent<ITableProps> = ({
  padding = 'default',
  size = 'medium',
  component: Component = 'table',
  className = '',
  ...others
}) => {
  const table = { padding, size };

  return (
    <TableContext.Provider value={table}>
      <Component className={combineClass('table', className)} {...others} />
    </TableContext.Provider>
  );
};
