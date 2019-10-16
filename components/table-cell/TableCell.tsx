import * as React from 'react';
import combineClass from '../../utils/combineClass';
import TableLvl2Context, { TableLvl2ContextProps } from '../table/TableLvl2Context';

interface TableCellProps {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const generateTableCell = (component?: keyof JSX.IntrinsicElements, tableLvl2?: TableLvl2ContextProps) => {
  if (component) {
    return component;
  }

  if (tableLvl2 && tableLvl2.variant === 'head') {
    return 'th';
  }

  return 'td';
};

const TableCell: React.FunctionComponent<TableCellProps> = ({ component, className = '', ...others }) => {
  const tableLvl2 = React.useContext(TableLvl2Context);
  const Component = generateTableCell(component, tableLvl2);

  return <Component className={combineClass('table-cell', className)} {...others} />;
};

export default TableCell;
