import React, { Component, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './utils';
import { Navbar } from './features/App/components/Navbar';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    if (Array.isArray(error)) {
      this.notify(
        error.map((err) => err.message || err.detail).join('\n') ||
          'Internal Server Error',
      );
      return;
    }
    if (error) {
      this.notify(error.message || error.detail || 'Internal Server Error');
    }
  }

  // componentWillMount() {
  //   if (localStorage.getItem('token')) {
  //     this.props.dispatch(getUserAction());
  //   }
  // }

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
              <Route exact={true} path="/" component={HomePage} />
              <Route exact={true} path="/login" component={SignIn} />
              <Route exact={true} path="/signup" component={SignUp} />
              <Route exact={true} path="/profile" component={Profile} />
              <Route path="/me/posts" component={MyPost} />
              <Route path="/posts" component={Post} />
              <Route path="/categories" component={Category} />
              {/* <AuthRoute key={i} exact={route.exact} path={route.path} component={route.component} /> */}
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
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
