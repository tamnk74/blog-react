import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostTable from './PostTable';
import { postActions } from '../../../actions';
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

  componentDidMount() {
    console.log('AAA');
    console.log(postActions.getPosts({
      page: this.state.page,
      limit: this.state.limit,
    }));
    this.props.dispatch(postActions.getPosts({
      page: this.state.page,
      limit: this.state.limit,
    }));
  }

  handlePageChange(page) {
    // this.props.dispatch(postActions.getPosts(this.state));
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
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
  const { items, pageInfo } = state.posts || {};
  return {
    posts: items || [],
    pageInfo: pageInfo,
  };
}

const connectedPost = connect(mapStateToProps)(Post);
export { connectedPost as Post }; 