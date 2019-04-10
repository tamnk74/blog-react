import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import PostList from './PostList'
import { postActions } from '../../actions'
import Pagination from "react-js-pagination";

class Post extends React.Component {

  constructor(props) {
    super(props);
    const { type = 'latest' } = this.props;
    this.props.dispatch(postActions.getPosts(type));
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const { posts, pageInfo } = this.props;
    if (!posts) {
      return (
        <div> No posts !</div>
      )
    }
    return (
      <Fragment>
        <PostList posts={posts} pageInfo={pageInfo} />
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </Fragment>
    )
  }
}


function mapStateToProps(state) {
  const { data, pageInfo } = state.post && state.post.list || {};
  return {
    posts: data || [],
    pageInfo: pageInfo
  };
}

const connectedPost = connect(mapStateToProps)(Post);
export { connectedPost as Post }; 