import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import PostTable from './PostTable'
import { postActions } from '../../../actions'
import Pagination from "react-js-pagination";

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 20,
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
        <PostTable posts={posts}/>
        <Pagination
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
  const { data, pageInfo } = state.post && state.post.list || {};
  return {
    posts: data || [],
    pageInfo: pageInfo
  };
}

const connectedPost = connect(mapStateToProps)(Post);
export { connectedPost as Post }; 