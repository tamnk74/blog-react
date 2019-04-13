import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../actions'
import AdminLinks from './AdminLinks'

class SignedInLinks extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.dispatch(authActions.logout());
  }

  render() {
    const user = this.props.user;
    return (
      <ul className="nav navbar-nav navbar-right">
        { user.role == 'ADMIN' && 
          <AdminLinks />
        }
        <li className="dropdown open">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">
            {user.name} <span className="caret"></span>
          </a>
          <ul className="dropdown-menu" role="menu">
            <li><NavLink to='/myposts'>My Posts</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><a onClick={this.handleLogout} href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: e => {
      dispatch(authActions.logout());
    }
  }
}

const ConnectedSignedInLinks = connect(mapDispatchToProps)(SignedInLinks);
export { ConnectedSignedInLinks as SignedInLinks };