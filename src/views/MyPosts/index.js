import React, { Component } from 'react'
  import { Post } from '../../components/posts/Post'
import Notifications from '__ROOT/components/dashboard/Notifications'

class MyPosts extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <Post type="latest"/>
          </div>
          <div className="col-md-3">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default MyPosts