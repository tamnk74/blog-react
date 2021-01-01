import React, { Component, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './utils';
import { Navbar } from './features/App/components/Navbar';
import Routers from './routers';
import Loading from './components/Loading';
import { getUserAction } from './features/Auth/store/actions';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  notify = (message) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getUser();
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet
          titleTemplate="%s - Sample Blog"
          defaultTitle="Sample React Blog"
        >
          <meta name="description" content="A React.js blog application" />
        </Helmet>
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Router history={history}>
            <Navbar />
            <Routers />
          </Router>
        </Suspense>
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func,
  errors: PropTypes.array,
  token: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
