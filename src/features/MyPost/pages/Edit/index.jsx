import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePost, getPost } from '../../store/actions'
import PostForm from '../../components/PostForm'
import { history } from '../../../../utils';
import wrapLayout from '../../../../components/layouts/default';

class EditPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.props.dispatch(updatePost(post));
  }

  componentWillMount() {
    this.props.dispatch(getPost(this.props.match.params.id));
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