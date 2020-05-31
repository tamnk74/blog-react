import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import PostList from '../Post/components/PostList'
import * as postActions from '../Post/store/actions'
import Pagination from "react-js-pagination";
import wrapLayout from '../../components/layouts/default';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(postActions.getPosts({
      ...this.state,
      sort: '-view',
    }));
  }

  handlePageChange(page) {
    this.props.dispatch(postActions.getPosts(this.props.type, page, this.state.limit));
  }

  render() {
    const { posts, pageInfo } = this.props;
    const { limit } = this.state;
    return (
      <Fragment>
        {posts &&
          <PostList posts={posts} />
        }
        {pageInfo &&
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={pageInfo.page}
            itemsCountPerPage={limit}
            totalItemsCount={pageInfo.count}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        }
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  posts: state.posts.items,
  pageInfo: state.posts.pageInfo
})

const connectedHomePage = wrapLayout(connect(mapStateToProps)(HomePage));
export { connectedHomePage as HomePage }; 