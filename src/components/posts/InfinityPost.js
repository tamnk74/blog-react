import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import PostList from './PostList'
import { postActions } from '../../actions'
import Pagination from "react-js-pagination";

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
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;

            // Bails early if:
            // * there's an error
            // * it's already loading
            // * there's nothing left to load
            if (error || isLoading || !hasMore) return;

            // Checks that the page has scrolled to the bottom
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                console.log('Load next page');
                // loadUsers();
            }
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentWillMount() {
        // Loads some posts on initial load
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

const connectedInfinityPost = connect(mapStateToProps)(InfinityPost);
export { connectedInfinityPost as InfinityPost }; 