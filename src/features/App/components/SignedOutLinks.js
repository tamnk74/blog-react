import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link">
          Sign up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
