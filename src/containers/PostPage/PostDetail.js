import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { postActions } from './actions'
import moment from 'moment';
import { markdown } from 'markdown';

class PostDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(postActions.getPost(this.props.match.params.slug));
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return (
        <div>Loading</div>
      )
    }
    return (
      <div className="container">
        <div className="card">
          <div className="card-header"><h2><Link to={`/posts/${post.slug}`}>{post.title}</Link></h2></div>
          <div className="card-body" dangerouslySetInnerHTML={{__html: markdown.toHTML(post.content)}} ></div>
          <div className="card-footer"><ul className="list-inline">
            <li><i className="fa fa-user"></i> By: <a href="#">{post.user && (post.user.fullName)}</a></li>
            <li>| <i className="fa fa-calendar" ></i> {moment(post.createdAt).format('DD-MMM-YYYY')} |</li>
            <li>| <i className="fa fa-comments" ></i> <a href="#"> {post.view} viewer</a> |</li>
            {post.category &&
              <li>| Categories: <span className="label label-primary">reactjs</span></li>
            }
          </ul>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { post } = state.posts || {};
  return {
    post: post
  };
}

const connectedPostDetail = connect(mapStateToProps)(PostDetail);
export { connectedPostDetail as PostDetail }; 