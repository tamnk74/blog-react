import React from 'react'
import { history } from '../../utils';

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <h3>
        Page not found for this path <code>{location.pathname}</code>
      </h3>
      <button onClick={() => history.goBack()} >Go back</button>
    </div>
  );
}

export default NotFoundPage;