import React, { Component } from 'react'
import { Post } from '../../components/posts/Post'
import Notifications from '../../components/dashboard/Notifications'

class Home extends Component {
  render() {
    console.log('Render Homepage');
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-md-offset-1">
            <div className="panel panel-info">
              <div className="panel-heading">Latest Posts</div>
              <div className="panel-body">
                <Post type="top" />
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

export default Home