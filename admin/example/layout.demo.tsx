import React, { ReactElement } from 'react';
import Aside from '../../components/layout/aside';
import Content from '../../components/layout/content';
import Footer from '../../components/layout/foot';
import Header from '../../components/layout/header';
import Layout from '../../components/layout/layout';
import './layout.demo.scss';

const LayoutDemo: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Layout className='spider-layout-demo'>
        <Header className='spider-header-demo'>Header</Header>
        <Content className='spider-content-demo'>Content</Content>
        <Footer className='spider-footer-demo'>Footer</Footer>
      </Layout>

      <Layout className='spider-layout-demo'>
        <Header className='spider-header-demo'>Header</Header>
        <Layout className='spider-layout-demo'>
          <Aside className='spider-aside-demo'>Aside</Aside>
          <Content className='spider-content-demo'>Content</Content>
        </Layout>
        <Footer className='spider-footer-demo'>Footer</Footer>
      </Layout>

      <Layout className='spider-layout-demo'>
        <Header className='spider-header-demo'>Header</Header>
        <Layout className='spider-layout-demo'>
          <Content className='spider-content-demo'>Content</Content>
          <Aside className='spider-aside-demo'>Aside</Aside>
        </Layout>
        <Footer className='spider-footer-demo'>Footer</Footer>
      </Layout>

      <Layout className='spider-layout-demo'>
        <Aside className='spider-out-aside-demo'>Aside</Aside>
        <Layout className='spider-layout-demo'>
          <Header className='spider-header-demo'>Header</Header>
          <Content className='spider-content-demo'>Content</Content>
          <Footer className='spider-footer-demo'>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutDemo;
