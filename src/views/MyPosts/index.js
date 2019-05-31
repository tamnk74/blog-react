import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostTable from '__ROOT/components/posts/PostTable'
import { getMyPosts, removePost } from '__ROOT/store/actions/post'

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.props.getPosts({
      page: this.props.page,
      limit: this.props.limit
    });
  }
  removePost = (e, post) => {
    if(confirm('Are you sure to remove this post?')) {
      this.props.removePost(post);
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="row">
                <div className="col-sm-10">
                  <h4>My Posts</h4></div>
                <div className="col-sm-2 text-right"><a href="/posts/create" className="btn btn-success">Create</a></div>
              </div>
            </div>
            <div className="panel-body">
              <PostTable posts={this.props.posts} removePost={this.removePost}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    page: state.posts.page,
    limit: state.posts.limit,
    total: state.posts.total,
  };
}

const mapDispatchToProps = dispatch => ({
  getPosts: options => dispatch(getMyPosts(options)),
  removePost: post => dispatch(removePost(post)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)