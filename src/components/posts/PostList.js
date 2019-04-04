import React from 'react'
import PostSummary from './PostSummary'

const PostList = () => {
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
                  <PostSummary />
                  <PostSummary />
                  <PostSummary />
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PostList