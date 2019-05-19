import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Aside from '../aside';
import Content from '../content';
import Layout from '../layout';

describe('<Layout />', () => {
  it('should render a empty layout', () => {
    const layoutJson = renderer.create(<Layout />).toJSON();
    expect(layoutJson).toMatchSnapshot();
  });

  it('detect the sider as children', () => {
    const wrapper = mount(
    <Layout>
      <Aside>Sider</Aside>
      <Content>Content</Content>
    </Layout>);
    expect(wrapper.find('.spider-layout').hasClass('spider-layout-with-aside')).toBe(true);
  });
});
