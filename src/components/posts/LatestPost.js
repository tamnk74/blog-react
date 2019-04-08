import React from 'react'
import { connect } from 'react-redux'

import PostList from './PostList'
import { postActions } from '../../actions'

class LatestPost extends React.Component {

  constructor(props) {
    super(props);

    // Get latest posts
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
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1>Recently Post</h1>
              </div>
              <div className="panel-body">
                <PostList posts={posts} pageInfo={pageInfo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
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