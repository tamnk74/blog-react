import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost, getPost } from './actions';
import PostForm from './PostForm';

class EditPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.props.updatePost(post);
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <PostForm post={post} onSubmit={(post) => this.handleSubmit(post)} />
        </div>
      </div>
    );
  }
}

EditPostPage.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object,
  getPost: PropTypes.func,
  updatePost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
  updatePost: (id) => dispatch(updatePost(id)),
});

const connectedEditPostPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPostPage);

export { connectedEditPostPage as EditPostPage };
