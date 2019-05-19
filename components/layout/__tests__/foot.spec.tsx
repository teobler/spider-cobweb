import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../foot';

describe('<Footer />', () => {
  it('should render a empty footer', () => {
    const layoutJson = renderer.create(<Footer />).toJSON();
    expect(layoutJson).toMatchSnapshot();
  });
});
