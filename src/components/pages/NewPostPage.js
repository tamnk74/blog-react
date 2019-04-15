import React, { Component } from 'react'
import PostForm from '../posts/PostForm'
import Notifications from '../dashboard/Notifications'

class NewPostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <PostForm />
          </div>
          <div className="col-md-3">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default NewPostPage