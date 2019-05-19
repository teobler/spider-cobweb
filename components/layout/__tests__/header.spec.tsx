import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../header';

describe('<Header />', () => {
  it('should render a empty footer', () => {
    const layoutJson = renderer.create(<Header />).toJSON();
    expect(layoutJson).toMatchSnapshot();
  });
});
