import React, { Component } from 'react'
import { Post } from '../../components/posts/Post'
import Notifications from '__ROOT/components/dashboard/Notifications'

class Posts extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-md-offset-1">
            <div className="panel panel-info">
              <div className="panel-heading">Latest Posts</div>
              <div className="panel-body">
                <Post type="latest" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="panel panel-info">
              <div className="panel-heading">Notifications</div>
              <div className="panel-body">
                <Notifications />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Posts