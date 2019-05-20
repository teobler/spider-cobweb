import React, { ReactElement } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Aside from '../components/layout/aside';
import Content from '../components/layout/content';
import Header from '../components/layout/header';
import Layout from '../components/layout/layout';
import './app.scss';
import ButtonDemo from './example/button.demo';
import GridDemo from './example/grid.demo';
import IconDemo from './example/icon.demo';
import LayoutDemo from './example/layout.demo';

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
            <ul className="spider-menu">
              <li className="spider-menu-item">
                <div>
                  <h4>Components</h4>
                </div>
                <ul className="spider-submenu">
                  <li>
                    <Link to="/icon">icon</Link>
                  </li>
                  <li>
                    <Link to="/button">button</Link>
                  </li>
                  <li>
                    <Link to="/layout">layout</Link>
                  </li>
                  <li>
                    <Link to="/grid">grid</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Aside>
          <Content className="content">
            <Route path="/icon" component={IconDemo} />
            <Route path="/button" component={ButtonDemo} />
            <Route path="/layout" component={LayoutDemo} />
            <Route path="/grid" component={GridDemo} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
