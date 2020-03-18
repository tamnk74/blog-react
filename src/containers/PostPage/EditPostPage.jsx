import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postActions } from './actions'
import PostForm from './PostForm'
import { history } from '../../utils';

class EditPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    postActions.updatePost(post).then(() => history.push('/me/posts'))
  }

  componentWillMount() {
    this.props.dispatch(postActions.getPost(this.props.match.params.id));
  }

  render() {
    const {post} = this.props;
    console.log(post);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <PostForm post={post} onSubmit={post => this.handleSubmit(post)}/>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const connectedEditPostPage = connect(mapStateToProps)(EditPostPage);
export { connectedEditPostPage as EditPostPage }; 