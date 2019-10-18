import * as React from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '../../index';
import renderer from 'react-test-renderer';

describe('<Table />', () => {
  it('should render a empty table', () => {
    const menuJson = renderer
      .create(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>,
      )
      .toJSON();
    expect(menuJson).toMatchSnapshot();
  });
});
