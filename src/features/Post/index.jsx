import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';
import { DetailPage } from './pages/Detail';
import { MainPage } from './pages/Main';
import wrapDefaultLayout from 'components/layouts/default';

Post.propTypes = {};

function Post() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={wrapDefaultLayout(MainPage)} />

      <Route
        path={`${match.url}/:slug`}
        component={wrapDefaultLayout(DetailPage)}
      />

      <Route component={wrapDefaultLayout(NotFound)} />
    </Switch>
  );
}

export default Post;
