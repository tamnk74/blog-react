import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

import PostList from '../../components/PostList';
import { getPosts } from '../../store/actions';
import Loading from 'components/Loading';

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
    this.props.getPosts({
      ...this.state,
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
    return (
      <>
        {posts ? <PostList posts={posts} /> : <Loading />}
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
      </>
    );
  }
}

MainPage.propTypes = {
  posts: PropTypes.object,
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

const connectedPostPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);

export { connectedPostPage as MainPage };
