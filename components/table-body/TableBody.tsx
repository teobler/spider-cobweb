import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableLvl2Context from '../table/TableLvl2Context';

interface TableHeadProps {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TableBody: React.FunctionComponent<TableHeadProps> = ({
  component: Component = 'tbody',
  className = '',
  ...others
}) => {
  return (
    <TableLvl2Context.Provider value={{variant: 'body'}}>
      <Component className={combineClass('table-head', className)} {...others} />
    </TableLvl2Context.Provider>
  );
};

export default TableBody;
