import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostSummary = ({ post }) => {
  return (
    <div>
      <h2>
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <div>{post.content.slice(0, 420) + '...'}</div>
      <div className="d-flex flex-row">
        <div className="p-2">
          <i className="fa fa-user"></i> By:{' '}
          {post.user && (
            <Link to={`/users/${post.user.id}/posts`}>
              {post.user.fullName}
            </Link>
          )}
        </div>
        <div className="p-2">
          | <i className="fa fa-calendar"></i>{' '}
          {moment(post.createdAt).format('DD-MMM-YYYY')}
        </div>
        <div className="p-2">
          | <i className="fa fa-comments"></i>{' '}
          <a href="#"> {post.view} viewer</a>
        </div>
        {post.category && (
          <div className="p-2">
            | Categories:{' '}
            <Link to={`/categories/${post.category.id}/posts`}>
              {post.category.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

PostSummary.propTypes = {
  post: PropTypes.object,
};

export default PostSummary;
