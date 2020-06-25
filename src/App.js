import React, { Component, Suspense } from 'react';
import { Helmet } from 'react-helmet';

import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import { history } from './utils';
import { Navbar } from './features/App/components/Navbar';
import NotFound from './components/NotFound';
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
        <Suspense fallback={<div>Loading ...</div>}>
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

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.app.error,
});

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };