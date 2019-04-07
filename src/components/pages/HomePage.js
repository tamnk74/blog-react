import React, { Component } from 'react'
import PostList from '../posts/PostList'
import Notifications from '../dashboard/Notifications'

class HomePage extends Component {
  render() {
    console.log('Render Homepage');
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <PostList />
          </div>
          <div className="col-md-3">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage