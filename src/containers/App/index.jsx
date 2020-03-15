import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import { history } from '../../utils';
import { Navbar } from './Navbar';
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
        <Helmet
          titleTemplate="%s - Sample Blog"
          defaultTitle="Sample React Blog"
        >
          <meta name="description" content="A React.js blog application" />
        </Helmet>
        <Router history={history}>
          <Navbar />
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