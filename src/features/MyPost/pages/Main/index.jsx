import React from 'react';
import { connect } from 'react-redux';

import PostTable from '../../components/PostTable';
import { getMyPosts, removePost } from '../../store/actions';
import Pagination from 'react-js-pagination';
import wrapLayout from 'components/layouts/default';

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
    this.props.getMyPosts({
      ...this.state,
      sort: this.props.sort,
    });
  }

  handlePageChange(page) {
    this.props.getMyPosts(page, this.state.limit, this.props.sort);
  }

  render() {
    const { posts, pageInfo, removePost } = this.props;
    const { limit } = this.state;
    return (
      <div className="container">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  pageInfo: state.posts.pageInfo,
});

const mapDispatchToProps = (dispatch) => ({
  removePost: (post) => dispatch(removePost(post)),
  getMyPosts: (page, limit, sort) => dispatch(getMyPosts(page, limit, sort)),
});

const connectedPostPage = wrapLayout(
  connect(mapStateToProps, mapDispatchToProps)(MyPostPage),
);
export { connectedPostPage as MyPostPage };
