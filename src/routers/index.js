import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from 'components/AuthRoute';
import NotFound from 'components/NotFound';
import wrapDefaultLayout from 'components/layouts/default';
import { HomePage } from 'features/Home';
import { SignIn, SignUp, Profile } from 'features/Auth/pages';

// Lazy load - Code splitting
const Post = React.lazy(() => import('features/Post'));
const MyPost = React.lazy(() => import('features/MyPost'));
const Category = React.lazy(() => import('features/Category'));
const Samples = React.lazy(() => import('features/Samples'));
const CV = React.lazy(() => import('features/Home/components/cv'));

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={wrapDefaultLayout(HomePage)} />
    <Route exact={true} path="/login" component={wrapDefaultLayout(SignIn)} />
    <Route exact={true} path="/signup" component={wrapDefaultLayout(SignUp)} />
    <AuthRoute
      exact={true}
      path="/profile"
      component={wrapDefaultLayout(Profile)}
    />
    <AuthRoute path="/me/posts" component={MyPost} />
    <Route path="/posts" component={Post} />
    <Route path="/cv" component={CV} />
    <Route path="/categories" component={Category} />
    <Route path="/samples" component={Samples} />
    <Route component={wrapDefaultLayout(NotFound)} />
  </Switch>
);

export default Routes;
