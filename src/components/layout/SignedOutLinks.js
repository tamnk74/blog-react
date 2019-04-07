import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li><NavLink to='/signup'>Sign up</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;