import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import PostList from '../../components/PostList';
import { getPosts } from '../../store/actions';
import wrapLayout from '../../../../components/layouts/default';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.props.dispatch(
      getPosts({
        ...this.state,
        sort: this.props.sort,
      }),
    );
  }

  handlePageChange(page) {
    this.props.dispatch(getPosts(this.props.type, page, this.state.limit));
  }

  render() {
    const { posts, pageInfo } = this.props;
    const { limit } = this.state;
    return (
      <Fragment>
        {posts && <PostList posts={posts} />}
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
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  pageInfo: state.posts.pageInfo,
});

const connectedPostPage = wrapLayout(connect(mapStateToProps)(MainPage));
export { connectedPostPage as MainPage };
