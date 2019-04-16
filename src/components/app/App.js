import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import { history } from '../../helpers';
import { Navbar } from '../layout/Navbar';
import { Alert } from '../alert/Alert';
import routes from '../../routes'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('jwt')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

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
            {routes.map((route, i) => {
              if (route.isPrivate) {
                return (<PrivateRoute key={i} exact={route.exact} path={route.path} component={route.component} />)
              }
              return (
                <Route key={i} exact={route.exact} path={route.path} component={route.component} />
              )
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App; 