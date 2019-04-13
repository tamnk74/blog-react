import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import { history } from '../../helpers';
import { Navbar } from '../layout/Navbar';
import { Alert } from '../alert/Alert';
import routes from '../../routes'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Navbar />
          <Alert />
          <Switch>
            { routes.map((route, i) => (
              <Route key={i} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App; 