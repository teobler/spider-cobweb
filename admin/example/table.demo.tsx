import * as React from 'react';
import { Table, TableBody, TableHead, TableRow, TableFooter } from '../../components';

const TableDemo: React.FunctionComponent = () => {
  return (
    <Table>
      <TableHead>head</TableHead>
      <TableBody>
        <TableRow>row</TableRow>
      </TableBody>
      <TableFooter>footer</TableFooter>
    </Table>
  );
};

export default TableDemo;
