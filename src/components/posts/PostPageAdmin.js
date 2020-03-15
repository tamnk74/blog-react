import React, { Component } from 'react'
import { Post } from './Post'
import Notifications from '../../dashboard/Notifications'

class PostPageAdmin extends Component {
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

export default PostPageAdmin