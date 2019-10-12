import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableLvl2Context from '../table/TableLvl2Context';

interface ITableHeadProps {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TableBody: React.FunctionComponent<ITableHeadProps> = ({
  component: Component = 'tbody',
  className = '',
  ...others
}) => {
  return (
    <TableLvl2Context.Provider value={{}}>
      <Component className={combineClass('table-head', className)} {...others} />
    </TableLvl2Context.Provider>
  );
};

export default TableBody;
