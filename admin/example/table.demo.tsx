import * as React from 'react';
import { TableBody } from '../../components/table-body/TableBody';
import { TableHead } from '../../components/table-head/TableHead';
import { Table } from '../../components/table/Table';

const TableDemo: React.FunctionComponent = () => {
  return (
    <Table>
      <TableHead>test</TableHead>
      <TableBody>test</TableBody>
    </Table>
  );
};

export default TableDemo;
