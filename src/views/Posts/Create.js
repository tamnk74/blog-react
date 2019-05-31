import React, { Component } from 'react'
import { connect } from 'react-redux';
import PostForm from "__ROOT/components/posts/PostForm";
import { createPost } from "__ROOT/store/actions/post";

class PostCreate extends Component {
  /**
   * Submit form
   * @param {Object} post 
   */
  submit = (post) => {
    this.props.createPost(post);
    this.props.history.push('/myposts');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">New Post</div>
            <div className="panel-body"></div>
            <PostForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

export default connect(
  null,
  mapDispatchToProps
)(PostCreate)