import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostTable = ({ posts, removePost }) => {
  const columns = ['no', 'title', 'content', 'view', 'action'];
  const confirmRemovePost = (post) => {
    if (window.confirm('Are you sure to remove this post?')) {
      removePost(post);
    }
  };
  const postRows = posts.map((post, i) => (
    <tr key={post.id}>
      {columns.map((column, j) => {
        if (column === 'no') {
          return <td key={j}>{i + 1}</td>;
        }
        if (column === 'action') {
          return (
            <td key={j}>
              <div className="btn-group">
                <Link
                  to={'/me/posts/' + post.id + '/edit'}
                  className="btn btn-default btn-xs"
                >
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>
                <button
                  className="btn btn-danger btn-xs"
                  onClick={() => confirmRemovePost(post)}
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              </div>
            </td>
          );
        }
        if (column === 'title') {
          return (
            <td key={j}>
              <Link to={'/me/posts/' + post.id}>{post.title}</Link>
            </td>
          );
        }
        if (column === 'content') {
          return <td key={j}>{post.content.slice(0, 200)}</td>;
        }
        return <td key={j}>{post[column]}</td>;
      })}
    </tr>
  ));

  const postHeader = columns.map((column, i) => <td key={i}>{column}</td>);

  return (
    <table className="table table-hover">
      <thead>
        <tr>{postHeader}</tr>
      </thead>
      <tbody>{postRows}</tbody>
    </table>
  );
};

PostTable.propTypes = {
  removePost: PropTypes.func,
  posts: PropTypes.array,
};

export default PostTable;
