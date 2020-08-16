import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostTable from '../../components/PostTable';
import { getMyPosts, removePost } from '../../store/actions';
import Pagination from 'react-js-pagination';

class MyPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.props.getMyPosts(this.state);
  }

  handlePageChange(page) {
    this.setState({
      page,
    });
    this.props.getMyPosts(this.state);
  }

  render() {
    const { posts, pageInfo, removePost } = this.props;
    const { limit } = this.state;
    return (
      <>
        {posts && <PostTable posts={posts} removePost={removePost} />}
        {pageInfo && (
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={pageInfo.page}
            itemsCountPerPage={limit}
            totalItemsCount={pageInfo.count}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        )}
      </>
    );
  }
}

MyPostPage.propTypes = {
  posts: PropTypes.array,
  pageInfo: PropTypes.object,
  removePost: PropTypes.func,
  getMyPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  pageInfo: state.posts.pageInfo,
});

const mapDispatchToProps = (dispatch) => ({
  removePost: (post) => dispatch(removePost(post)),
  getMyPosts: (page, limit, sort) => dispatch(getMyPosts(page, limit, sort)),
});

const connectedPostPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPostPage);

export { connectedPostPage as MyPostPage };
