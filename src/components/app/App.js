import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import HomePage from '../pages/HomePage';
import { SignIn, SignUp } from '../auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
             <Route exact path='/' component={HomePage}/>
             <Route path='/login' component={SignIn}/>
             <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
