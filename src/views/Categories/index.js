import React, { Component } from 'react'
import { Category } from '__ROOT/components/categories/Category'
import Notifications from '__ROOT/components/dashboard/Notifications'

class Categories extends Component {
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

export default Categories