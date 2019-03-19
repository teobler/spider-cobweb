import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';

describe('icon', () => {
  it('should render a empty icon', () => {
    const iconJson = renderer.create(<Icon name="wechat"/>).toJSON();
    expect(iconJson).toMatchSnapshot();
  });

  it('should call callback function', () => {
    const fn = jest.fn();
    const iconNode = mount(<div><Icon name="wechat" onClick={fn}/></div>);
    iconNode.find('Icon').simulate('click');
    expect(fn).toBeCalled();
  });
});
