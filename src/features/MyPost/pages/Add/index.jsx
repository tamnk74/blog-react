import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createPost } from '../../store/actions'
import PostForm from '../../components/PostForm'
import wrapLayout from '../../../../components/layouts/default';

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

NewPostPage.propTypes = {
  createPost: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

const connectedNewPostPage = wrapLayout(connect(null, mapDispatchToProps)(NewPostPage));
export { connectedNewPostPage as NewPostPage };