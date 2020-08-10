import React, { Component } from 'react';

// This function takes a component...
export default function wrapLayout(WrappedComponent) {
  // ...and returns another component...
  return class Layout extends Component {
    render() {
      return (
        <div className="col-md-8 offset-md-2">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
