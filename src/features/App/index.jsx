import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { history } from '../../utils';
import { Navbar } from './components/Navbar';
import routes from '../../routes'
import { getUserAction } from '../AuthPage/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  notify = (message) => toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  });

  componentWillReceiveProps(nextProps) {
    nextProps.error && this.notify(nextProps.error);
  }

  // componentWillMount() {
  //   if (localStorage.getItem('token')) {
  //     this.props.dispatch(getUserAction());
  //   }
  // }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.dispatch(getUserAction());
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
        <ToastContainer />
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
  error: state.app.error,
});

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };