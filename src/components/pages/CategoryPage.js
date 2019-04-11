import React, { Component } from 'react'
import { Category } from '../categories/Category'
import Notifications from '../dashboard/Notifications'

class HomePage extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-9">
            <Category/>
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