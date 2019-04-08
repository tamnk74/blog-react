import React from 'react'
import PostSummary from './PostSummary'
//import './Post.css'

const PostList = ({ posts, pageInfo }) => {

  const postList = posts.map(post => (
    <li className="list-group-item" key={post.id}><PostSummary post={post} /></li>
  ));

  return (
    <div className="row post-list-mgt">
      <ul className="list-group"> {postList}</ul>
    </div>
  )
}

export default PostList