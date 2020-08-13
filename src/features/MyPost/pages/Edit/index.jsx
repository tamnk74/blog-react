import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost, getPost } from '../../store/actions';
import { getCategoriesAction } from 'features/Category/store/actions';
import PostForm from '../../components/PostForm';
import wrapLayout from 'components/layouts/default';

class EditPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.props.updatePost({
      ...post,
      id: this.props.post.id,
    });
  }

  UNSAFE_componentWillMount() {
    this.props.fetchCategories();
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, categories } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <PostForm
            post={post}
            onSubmit={(post) => this.handleSubmit(post)}
            categories={categories}
          />
        </div>
      </div>
    );
  }
}

EditPostPage.propTypes = {
  post: PropTypes.object,
  updatePost: PropTypes.func,
  getPost: PropTypes.func,
  fetchCategories: PropTypes.func,
  categories: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapDispatchToProps = (dispatch) => ({
  updatePost: (post) => dispatch(updatePost(post)),
  getPost: (post) => dispatch(getPost(post)),
  fetchCategories: () => dispatch(getCategoriesAction()),
});

const mapStateToProps = (state) => ({
  post: state.posts.post,
  categories: state.categories.items.map((category) => ({
    value: category.id,
    label: category.title,
  })),
});

const connectedEditPostPage = wrapLayout(
  connect(mapStateToProps, mapDispatchToProps)(EditPostPage),
);
export { connectedEditPostPage as EditPostPage };
