import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';

describe('icon', () => {
  it('should render a empty icon', () => {
    const emptyIconJson = renderer.create(<Icon name="wechat"/>).toJSON();
    expect(emptyIconJson).toMatchSnapshot();
  });
});
