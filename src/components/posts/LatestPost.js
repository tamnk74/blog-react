import React from 'react'
import { connect } from 'react-redux'

import PostList from './PostList'
import { postActions } from '../../actions'

class LatestPost extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(postActions.getPosts('latest'));
  }

  render() {
    const { posts, pageInfo } = this.props;
    if (!posts) {
      return (
        <div> No posts !</div>
      )
    }
    return (
      <PostList posts={posts} pageInfo={pageInfo} />
    )
  }
}


function mapStateToProps(state) {
  const { data, pageInfo } = state.post && state.post.list || {};
  return {
    posts: data || [],
    pageInfo: pageInfo
  };
}

const connectedLatestPost = connect(mapStateToProps)(LatestPost);
export { connectedLatestPost as LatestPost }; 