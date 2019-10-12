import * as React from 'react';
import { Table } from '../../index';
import renderer from 'react-test-renderer';

describe('<Table />', () => {
  it('should render a empty table', () => {
    const menuJson = renderer.create(<Table />).toJSON();
    expect(menuJson).toMatchSnapshot();
  });
});
