import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PostList from "../Post/components/PostList";
import { getPosts } from "../Post/store/actions";
import Pagination from "react-js-pagination";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.props.getPosts({
      ...this.state,
      sort: "-view",
    });
  }

  handlePageChange(page) {
    this.setState({
      page,
    });
    this.props.getPosts(this.state);
  }

  render() {
    const { posts, pageInfo } = this.props;
    const { limit } = this.state;
    console.log(this.props);
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

HomePage.propTypes = {
  posts: PropTypes.array,
  pageInfo: PropTypes.object,
  getPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  pageInfo: state.posts.pageInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (options) => dispatch(getPosts(options)),
});

const connectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export { connectedHomePage as HomePage };
