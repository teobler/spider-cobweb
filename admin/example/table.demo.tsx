import * as React from 'react';
import { Table, TableBody, TableHead } from '../../components';
import TableFooter from '../../components/table-footer/TableFooter';

const TableDemo: React.FunctionComponent = () => {
  return (
    <Table>
      <TableHead>head</TableHead>
      <TableBody>body</TableBody>
      <TableFooter>footer</TableFooter>
    </Table>
  );
};

export default TableDemo;
