import React, { ReactElement } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Aside from '../components/layout/aside';
import Footer from '../components/layout/foot';
import Header from '../components/layout/header';
import Main from '../components/layout/main';
import ButtonExample from './example/button.example';
import IconExample from './example/icon.example';
import Layout from '../components/layout/layout';

const App: React.FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <div>
        <header>
          <div>spider-cobweb</div>
        </header>
        <div>
          <aside>
            <h2>components</h2>
            <ul>
              <li>
                <Link to="/icon">icon</Link>
              </li>
              <li>
                <Link to="/button">button</Link>
              </li>
            </ul>
          </aside>
          <main>
            <Route path="/icon" component={IconExample} />
            <Route path="/button" component={ButtonExample} />
            <Layout>
              <Header></Header>
              <Layout>
                <Aside></Aside>
                <Main></Main>
              </Layout>
              <Footer></Footer>
            </Layout>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
