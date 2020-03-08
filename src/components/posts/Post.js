import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import PostList from './PostList'
import { postActions } from '../../actions'
import Pagination from "react-js-pagination";

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(postActions.getPosts(this.props.type, this.state.page, this.state.limit));
  }

  handlePageChange(page) {
    this.props.dispatch(postActions.getPosts(this.props.type, page, this.state.limit));
  }

  render() {
    const { posts, pageInfo } = this.props;
    const { limit } = this.state;
    if (!posts || !pageInfo) {
      return (
        <div> No posts !</div>
      )
    }
    return (
      <Fragment>
        <PostList posts={posts} />
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={pageInfo.page}
          itemsCountPerPage={limit}
          totalItemsCount={pageInfo.count}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </Fragment>
    )
  }
}


function mapStateToProps(state) {
  const { data, pageInfo } = state.posts && state.posts.list || {};
  return {
    posts: data || [],
    pageInfo: pageInfo
  };
}

const connectedPost = connect(mapStateToProps)(Post);
export { connectedPost as Post }; 