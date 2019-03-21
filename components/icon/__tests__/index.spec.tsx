import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';

describe('icon', () => {
  it('should render a empty icon', () => {
    const iconJson = renderer.create(<Icon name="wechat"/>).toJSON();
    expect(iconJson).toMatchSnapshot();
  });

  it('should not has spider-spin class without spin and loading', () => {
    const wrapper = shallow(<Icon name="wechat"/>);
    const iconWrapper = wrapper.find('.spider-spin');
    expect(iconWrapper.length).toBe(0);
  });

  it('should has spider-spin class given spin is true', () => {
    const wrapper = shallow(<Icon name="qq" spin={true}/>);
    const iconWrapper = wrapper.find('.spider-spin');
    expect(iconWrapper.length).toBe(1);
  });

  it('should has spider-spin class given name is loading', () => {
    const wrapper = shallow(<Icon name="loading"/>);
    const iconWrapper = wrapper.find('.spider-spin');
    expect(iconWrapper.length).toBe(1);
  });
});
