import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableLvl2Context from '../table/TableLvl2Context';

interface TableFooterProps {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TableFooter: React.FunctionComponent<TableFooterProps> = ({
  component: Component = 'tfoot',
  className = '',
  ...others
}) => {
  return (
    <TableLvl2Context.Provider value={{variant: 'footer'}}>
      <Component className={combineClass('table-footer', className)} {...others} />
    </TableLvl2Context.Provider>
  );
};

export default TableFooter;
