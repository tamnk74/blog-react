import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import { NewPostPage, EditPostPage, MyPostPage, DetailPage } from './pages';

Post.propTypes = {};

function Post() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MyPostPage} />
      <Route exact path={`${match.url}/create`} component={NewPostPage} />
      <Route path={`${match.url}/:id/edit`} component={EditPostPage} />
      <Route path={`${match.url}/:id`} component={DetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Post;
