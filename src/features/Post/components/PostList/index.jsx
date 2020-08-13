import React from 'react';
import PostSummary from '../PostSummary';
import PropTypes from 'prop-types';

const mrt15 = {
  marginTop: '15px',
};

const PostList = ({ posts }) => {
  const postList = posts.map((post) => (
    <li className="list-group-item" key={post.id}>
      <PostSummary post={post} />
    </li>
  ));

  return (
    <div className="row" style={mrt15}>
      <ul className="list-group"> {postList}</ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};
export default PostList;
