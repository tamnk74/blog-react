import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <Fragment>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/posts">Posts</Link></li>
            <li><Link to="/admin/tags">Tags</Link></li>
        </Fragment>
    )
}

export default AdminLinks;