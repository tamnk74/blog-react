import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import { CategoryPage } from './pages/Main';
import wrapDefaultLayout from 'components/layouts/default';

Category.propTypes = {};

function Category() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={match.url}
        component={wrapDefaultLayout(CategoryPage)}
      />
      <Route component={wrapDefaultLayout(NotFound)} />
    </Switch>
  );
}

export default Category;
