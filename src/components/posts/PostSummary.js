import React from 'react'
import moment from 'moment';

const PostSummary = ({ post }) => {
  return (
    <div>
      <h2><a href={`/posts/${post.id}`}>{post.title}</a></h2>
      <div>{post.content.slice(0, 420) + '...'}</div>
      <ul className="list-inline">
        <li><i className="fa fa-user"></i> By: <a href="#">{post.user && (post.user.firstName + ' ' + post.user.lastName)}</a></li>
        <li>| <i className="fa fa-calendar" ></i> {moment(post.createdAt).format('DD-MMM-YYYY')} |</li>
        <li>| <i className="fa fa-comments" ></i> <a href="#"> { post.view } viewer</a> |</li>
        { post.category && 
          <li>| Categories: <span className="label label-primary">reactjs</span></li>
        }
      </ul>
    </div>
  )
}

export default PostSummary