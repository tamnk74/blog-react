import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/my-posts'>My Posts</NavLink></li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
      <li><NavLink to='/logout'>Logout</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;