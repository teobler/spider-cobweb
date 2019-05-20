import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../row';

describe('<Row />', () => {
  it('should render a empty layout', () => {
    const layoutJson = renderer.create(<Row />).toJSON();
    expect(layoutJson).toMatchSnapshot();
  });
});
