import * as React from 'react';

export interface TableLvl2ContextProps {
  variant: string;
}
const TableLvl2 = { variant: 'body' };
const TableLvl2Context = React.createContext<TableLvl2ContextProps>(TableLvl2);

export default TableLvl2Context;
