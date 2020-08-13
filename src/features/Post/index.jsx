import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import { DetailPage } from './pages/Detail';
import { MainPage } from './pages/Main';

Post.propTypes = {};

function Post() {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/:slug`} component={DetailPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Post;
