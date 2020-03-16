import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { history } from '../../utils';
import { Navbar } from './Navbar';
import routes from '../../routes'
import { authActions } from '../AuthPage/actions';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

class App extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if(localStorage.getItem('token')) {
      this.props.dispatch(authActions.getUserInfo());
    }
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
const mapStateToProps = state => ({
  token: state.auth.token,
})

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };