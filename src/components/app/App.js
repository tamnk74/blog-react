import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers';
import {Navbar} from '../layout/Navbar';
import HomePage from '../pages/HomePage';
import { SignIn, SignUp } from '../auth';
import { Alert } from '../alert/Alert';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Alert />
        <Router history={history}>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Router>
      </div>
    );
  }
}

export default App; 