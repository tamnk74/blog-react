import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { postActions } from '__ROOT/store/actions/post'

let PostForm = props => {
  const { handleSubmit, post = {} } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" className="form-control" value="post.title"/>
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <Field name="content" component="textarea" className="form-control" rows="10" value="post.content"/>
      </div>
      <div className="row text-center">
        <button type="submit" className="btn btn-info">Submit</button>
        <button type="reset" className="btn btn-default">Reset</button>
      </div>
    </form>
  )
}

PostForm = reduxForm({
  form: 'post'
})(PostForm)

export default PostForm