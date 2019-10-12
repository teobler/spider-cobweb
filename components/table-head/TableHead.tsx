import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableLvl2Context from '../table/TableLvl2Context';

interface TableHeadProps {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TableHead: React.FunctionComponent<TableHeadProps> = ({
  component: Component = 'thead',
  className = '',
  ...others
}) => {
  return (
    <TableLvl2Context.Provider value={{}}>
      <Component className={combineClass('table-head', className)} {...others} />
    </TableLvl2Context.Provider>
  );
};

export default TableHead;
