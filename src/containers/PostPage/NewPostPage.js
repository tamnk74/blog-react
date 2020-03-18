import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postActions } from './actions'
import PostForm from './PostForm'

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.props.createPost(post);
  }

  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <PostForm onSubmit={post => this.handleSubmit(post)}/>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(postActions.createPost(post))
})

const connectedNewPostPage = connect(null, mapDispatchToProps)(NewPostPage);
export { connectedNewPostPage as NewPostPage };