import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostList from './PostList';
import { getPosts } from './actions';
import Pagination from 'react-js-pagination';

class InfinityPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 3,
    };
    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadMorePosts,
        state: { error, isLoading, hasMore },
      } = this;

      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log('Load next page');
        loadMorePosts();
      }
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    // Loads some posts on initial load
    this.props.getPosts(this.state);
  }

  loadMorePosts() {
    this.props.getPosts(this.state);
  }

  render() {
    const { posts, pageInfo } = this.props;
    const { limit } = this.state;
    if (!posts || !pageInfo) {
      return <div> No posts !</div>;
    }
    return (
      <Fragment>
        <PostList posts={posts} />
        <Pagination
          activePage={pageInfo.page}
          itemsCountPerPage={limit}
          totalItemsCount={pageInfo.count}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

InfinityPost.propTypes = {
  posts: PropTypes.array,
  pageInfo: PropTypes.object,
  getPosts: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: (options) => dispatch(getPosts(options)),
});

function mapStateToProps(state) {
  const { data, pageInfo } = (state.post && state.post.list) || {};
  return {
    posts: data || [],
    pageInfo: pageInfo,
  };
}

const connectedInfinityPost = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfinityPost);
export { connectedInfinityPost as InfinityPost };
