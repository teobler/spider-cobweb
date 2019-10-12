import React, { ReactElement } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Aside from '../components/layout/aside';
import Content from '../components/layout/content';
import Header from '../components/layout/header';
import Layout from '../components/layout/layout';
import ListItem from '../components/menu/listItem';
import Menu from '../components/menu/menu';
import SubList from '../components/menu/subList';
import SubMenu from '../components/menu/subMenu';
import './app.scss';
import ButtonDemo from './example/button.demo';
import GridDemo from './example/grid.demo';
import IconDemo from './example/icon.demo';
import LayoutDemo from './example/layout.demo';
import MenuDemo from './example/menu.demo';
import TableDemo from './example/table.demo';

const App: React.FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <a href="#" className="logo-link">
            <img src="../resources/logo.png" alt="logo" className="logo" />
          </a>
        </Header>
        <Layout className="main">
          <Aside className="aside">
            <Menu defaultSelectedKey="icon">
              <SubMenu title="Components" uniqueKey="submenu" openPopup={true}>
                <SubList>
                  <ListItem uniqueKey="icon">
                    <Link to="/icon">icon</Link>
                  </ListItem>
                  <ListItem uniqueKey="button">
                    <Link to="/button">button</Link>
                  </ListItem>
                  <ListItem uniqueKey="layout">
                    <Link to="/layout">layout</Link>
                  </ListItem>
                  <ListItem uniqueKey="grid">
                    <Link to="/grid">grid</Link>
                  </ListItem>
                  <ListItem uniqueKey="menu">
                    <Link to="/menu">menu</Link>
                  </ListItem>
                  <ListItem uniqueKey="table">
                    <Link to="/table">table</Link>
                  </ListItem>
                </SubList>
              </SubMenu>
            </Menu>
          </Aside>
          <Content className="content">
            <Route path="/icon" component={IconDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/layout" component={LayoutDemo} />
            <Route path="/grid" component={GridDemo} />
            <Route path="/menu" component={MenuDemo} />
            <Route path="/table" component={TableDemo} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
