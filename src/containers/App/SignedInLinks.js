import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authActions } from '../AuthPage/actions'
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
      <ul className="navbar-nav navbar-right">
        { user.role == 'ADMIN' && 
          <AdminLinks />
        }
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" role="button" aria-expanded="true">
            {user.name} <span className="caret"></span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" role="menu">
            <NavLink to='/me/posts' className="dropdown-item">My Posts</NavLink>
            <NavLink to='/posts/create' className="dropdown-item">New Posts</NavLink>
            <NavLink to='/profile' className="dropdown-item">Profile</NavLink>
            <a onClick={this.handleLogout} href="#" className="dropdown-item">Logout</a>
          </div>
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