import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('button', () => {
  it('should render a empty button', () => {
    const emptyButtonJson = renderer.create(<Button/>).toJSON();
    expect(emptyButtonJson).toMatchSnapshot();
  });
});
