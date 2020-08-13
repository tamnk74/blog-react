import PropTypes from 'prop-types';
import React from 'react';
import { history } from 'utils';

NotFound.propTypes = {
  location: PropTypes.object,
};

function NotFound({ location }) {
  return (
    <div>
      <h3>
        Page not found for this path <code>{location.pathname}</code>
      </h3>
      <button className="btn btn-default" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}

export default NotFound;
