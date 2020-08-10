import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../../store/actions';
import { getCategoriesAction } from 'features/Category/store/actions';
import PostForm from '../../components/PostForm';
import wrapLayout from 'components/layouts/default';

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.props.fetchCategories();
  }

  handleSubmit(post) {
    this.props.createPost(post);
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <PostForm
            onSubmit={(post) => this.handleSubmit(post)}
            categories={categories}
          />
        </div>
      </div>
    );
  }
}

NewPostPage.propTypes = {
  createPost: PropTypes.func,
  fetchCategories: PropTypes.func,
  categories: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchCategories: () => dispatch(getCategoriesAction()),
});

const mapStateToProps = (state) => ({
  categories: state.categories.items.map((category) => ({
    value: category.id,
    label: category.title,
  })),
});

const connectedNewPostPage = wrapLayout(
  connect(mapStateToProps, mapDispatchToProps)(NewPostPage),
);
export { connectedNewPostPage as NewPostPage };
