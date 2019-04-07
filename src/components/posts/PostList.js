import React from 'react'
import PostSummary from './PostSummary'

const PostList = ({posts}) => {
  const postList = posts.map(post => (
    <PostSummary/>
  ));
  return (
    <Fragment>
      <div className="row post-list">
        {postList}
      </div>
    </Fragment>
  )
}

export default PostSummary