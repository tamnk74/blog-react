import React, { Component, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './utils';
import { Navbar } from './features/App/components/Navbar';
import AuthRoute from './components/AuthRoute';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import wrapDefaultLayout from 'components/layouts/default';
import { HomePage } from './features/Home';
import { SignIn, SignUp, Profile } from './features/Auth/pages';
import { getUserAction } from './features/Auth/store/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load - Code splitting
const Post = React.lazy(() => import('./features/Post'));
const MyPost = React.lazy(() => import('./features/MyPost'));
const Category = React.lazy(() => import('./features/Category'));

class App extends Component {
  constructor(props) {
    super(props);
  }

  notify = (message) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

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
        <Suspense fallback={<Loading />}>
          <Router history={history}>
            <Navbar />
            <Switch>
              <Route
                exact={true}
                path="/"
                component={wrapDefaultLayout(HomePage)}
              />
              <Route
                exact={true}
                path="/login"
                component={wrapDefaultLayout(SignIn)}
              />
              <Route
                exact={true}
                path="/signup"
                component={wrapDefaultLayout(SignUp)}
              />
              <AuthRoute
                exact={true}
                path="/profile"
                component={wrapDefaultLayout(Profile)}
              />
              <AuthRoute path="/me/posts" component={MyPost} />
              <Route path="/posts" component={Post} />
              <Route path="/categories" component={Category} />
              <Route component={wrapDefaultLayout(NotFound)} />
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func,
  errors: PropTypes.array,
  token: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
