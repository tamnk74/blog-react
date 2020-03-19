import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postActions } from './actions'
import PostForm from './PostForm'
import { history } from '../../utils';
import wrapLayout from '../../components/layouts/default';

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
    const { post } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <PostForm post={post} onSubmit={post => this.handleSubmit(post)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const connectedEditPostPage = wrapLayout(connect(mapStateToProps)(EditPostPage));
export { connectedEditPostPage as EditPostPage }; 