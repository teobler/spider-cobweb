import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableLvl2Context from '../table/TableLvl2Context';

interface TableRowProps {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TableRow: React.FunctionComponent<TableRowProps> = ({
  component: Component = 'tr',
  className = '',
  ...others
}) => {
  return (
    <TableLvl2Context.Provider value={{ variant: 'body' }}>
      <Component className={combineClass('table-row', className)} {...others} />
    </TableLvl2Context.Provider>
  );
};

export default TableRow;
