import React, { ReactElement } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ButtonExample from './example/button.example';
import IconExample from './example/icon.example';

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
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
