import React, { Component } from 'react'
import PostForm from './PostForm'

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
          </div>
        </div>
      </div>
    )
  }
}

export default NewPostPage