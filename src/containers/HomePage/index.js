import React, { Component } from 'react'
import { PostPage } from '../PostPage'

class HomePage extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <PostPage sort="-view"/>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage