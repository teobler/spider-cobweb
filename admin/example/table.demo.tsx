import * as React from 'react';
import { Table, TableBody, TableHead, TableRow, TableFooter, TableCell } from '../../components';

const TableDemo: React.FunctionComponent = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>head left</TableCell>
          <TableCell>head right</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>left</TableCell>
          <TableCell>right</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>footer left</TableCell>
          <TableCell>footer right</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableDemo;
