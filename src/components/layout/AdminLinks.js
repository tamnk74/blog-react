import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <Fragment>
            <li className="nav-item"><Link to="/admin/dashboard" className="nav-link">Dashboard</Link></li>
            <li className="nav-item"><Link to="/admin/users" className="nav-link">Users</Link></li>
            <li className="nav-item"><Link to="/admin/posts" className="nav-link">Posts</Link></li>
            <li className="nav-item"><Link to="/admin/tags" className="nav-link">Tags</Link></li>
        </Fragment>
    )
}

export default AdminLinks;