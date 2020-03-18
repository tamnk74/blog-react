import React from 'react'
import { history } from '../../utils';
import wrapLayout from '../../components/layouts/default';

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <h3>
        Page not found for this path <code>{location.pathname}</code>
      </h3>
      <button className="btn btn-default" onClick={() => history.goBack()} >Go back</button>
    </div>
  );
}

export default wrapLayout(NotFoundPage);