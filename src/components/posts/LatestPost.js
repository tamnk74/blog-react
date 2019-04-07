import React from 'react'
import PostList from './PostList'

class LatestPost extends React.Component {

  constructor(props) {
    super(props);

    // Get latest post
    //this.props.dispatch(postActions.getLatest());

    this.state = {
      postList: [1],
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h1>Recently Post</h1>
              </div>
              <div className="panel-body">
                <table className="table table-hover">
                  <tbody>
                    <PostList posts={this.state.postList} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestPost