import React, { Component } from 'react'
import { Post } from '../../components/posts/Post'
import Notifications from '../../components/dashboard/Notifications'

class Home extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <Post type="top"/>
          </div>
          <div className="col-md-3">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Home