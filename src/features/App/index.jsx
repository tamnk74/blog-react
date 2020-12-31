import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from 'utils';
import { Navbar } from './components/Navbar';
import AuthRoute from 'components/AuthRoute';
import routes from '../../routes';
import { getUserAction } from '../AuthPage/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  notify = (message) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    console.err(123, error);
    if (error) {
      this.notify(error.toString());
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getUser();
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
            {routes.map((route, i) =>
              route.isPrivate ? (
                <AuthRoute
                  key={i}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ) : (
                <Route
                  key={i}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ),
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func,
  error: PropTypes.object,
  token: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
  error: state.app.error,
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
