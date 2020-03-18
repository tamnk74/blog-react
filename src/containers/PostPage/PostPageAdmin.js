import React, { Component } from 'react'
import { PostPage } from './index'

class PostPageAdmin extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <PostPage type="latest" />
          </div>
          <div className="col-md-3">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export {
  PostPageAdmin
}