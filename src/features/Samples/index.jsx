import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';
import { CssSample, GoogleCalendar, MainPage } from './pages';
import wrapDefaultLayout from 'components/layouts/default';

Samples.propTypes = {};

function Samples() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.url} component={wrapDefaultLayout(MainPage)} />
      <Route path={`${match.url}/css-samples`} component={CssSample} />
      <Route
        path={`${match.url}/google-calendar`}
        component={wrapDefaultLayout(GoogleCalendar)}
      />

      <Route component={wrapDefaultLayout(NotFound)} />
    </Switch>
  );
}

export default Samples;
