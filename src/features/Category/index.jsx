import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import { CategoryPage } from './pages/Main';

Category.propTypes = {};

function Category(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Category;