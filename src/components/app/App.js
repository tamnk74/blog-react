import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import { alertActions } from '../../actions';
import Navbar from '../layout/Navbar';
import HomePage from '../pages/HomePage';
import { SignIn, SignUp } from '../auth';
import { Alert } from '../alert/Alert';

class App extends Component {

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // Clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Alert/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 