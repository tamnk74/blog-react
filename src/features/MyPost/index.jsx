import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';
import { NewPostPage, EditPostPage, MyPostPage, DetailPage } from './pages';
import wrapDefaultLayout from 'components/layouts/default';

Post.propTypes = {};

function Post() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={wrapDefaultLayout(MyPostPage)} />
      <Route
        exact
        path={`${match.url}/create`}
        component={wrapDefaultLayout(NewPostPage)}
      />
      <Route
        path={`${match.url}/:id/edit`}
        component={wrapDefaultLayout(EditPostPage)}
      />
      <Route
        path={`${match.url}/:id`}
        component={wrapDefaultLayout(DetailPage)}
      />
      <Route component={wrapDefaultLayout(NotFound)} />
    </Switch>
  );
}

export default Post;
