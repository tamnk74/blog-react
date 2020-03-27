import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from './actions'
import PostForm from './PostForm'
import { history } from '../../utils';
import wrapLayout from '../../components/layouts/default';

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
      <div className="row">
        <div className="col-md-12">
          <PostForm onSubmit={post => this.handleSubmit(post)} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

const connectedNewPostPage = wrapLayout(connect(null, mapDispatchToProps)(NewPostPage));
export { connectedNewPostPage as NewPostPage };