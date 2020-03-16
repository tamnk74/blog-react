import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import PostTable from '../../components/posts/PostTable'
import { postActions } from './actions'
import Pagination from 'react-js-pagination';
import wrapLayout from '../../components/layouts/default';




class MyPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(postActions.getMyPosts({
      ...this.state,
      sort: this.props.sort,
    }));
  }

  handlePageChange(page) {
    this.props.dispatch(postActions.getMyPosts(this.props.type, page, this.state.limit));
  }

  render() {
    const { posts, pageInfo } = this.props;
    const { limit } = this.state;
    return (
      <div className="container">
        {posts &&
          <PostTable posts={posts} />
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
      </div>
    )
  }
}


const mapStateToProps = state => ({
  posts: state.posts.items,
  pageInfo: state.posts.pageInfo
})

const connectedPostPage = wrapLayout(connect(mapStateToProps)(MyPostPage));
export { connectedPostPage as MyPostPage }; 