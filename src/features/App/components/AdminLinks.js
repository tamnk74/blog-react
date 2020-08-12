import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
  return (
    <Fragment>
      <li className="nav-item dropdown">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          id="navbarAdminLink"
          data-toggle="dropdown"
          role="button"
          aria-expanded="true"
        >
          Management <span className="caret"></span>
        </a>
        <div
          className="dropdown-menu"
          aria-labelledby="navbarAdminLink"
          role="menu"
        >
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/admin/users" className="nav-link">
            Users
          </Link>
          <Link to="/admin/posts" className="nav-link">
            Posts
          </Link>
          <Link to="/admin/tags" className="nav-link">
            Tags
          </Link>
        </div>
      </li>
    </Fragment>
  );
};

export default AdminLinks;
