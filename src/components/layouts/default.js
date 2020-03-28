import React, {Component} from 'react';
import Fibo from './Fibo';

// This function takes a component...
export default function wrapLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends Component {
    render() {
      return (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <WrappedComponent {...this.props}/>
          </div>
          <div className="col-md-2">
            <Fibo/>
          </div>
        </div>
      );
    }
  }
}