import React from 'react'

const NoMatch = ({ location }) => {
    return (
      <div>
        <h3>
          Page not found for this path <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

export default NoMatch;