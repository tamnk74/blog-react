import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostSummary = ({ post }) => {
  return (
    <div>
      <h2><Link to={`/posts/${post.slug}`}>{post.title}</Link></h2>
      <div>{post.content.slice(0, 420) + '...'}</div>
        <div className="d-flex flex-row">
          <div className="p-2"><i className="fa fa-user"></i> By: <a href="#">{post.user && (post.user.fullName)}</a></div>
          <div className="p-2">| <i className="fa fa-calendar" ></i> {moment(post.createdAt).format('DD-MMM-YYYY')} |</div>
          <div className="p-2">| <i className="fa fa-comments" ></i> <a href="#"> {post.view} viewer</a> |</div>
          {post.category &&
            <div className="p-2">| Categories: <span className="label label-primary">reactjs</span></div>
          }
        </div>
    </div>
  )
}

export default PostSummary