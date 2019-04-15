import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CategoryForm = props => {
  const { handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div>
      </div>
      <div>
        <label>Content</label>
        <div>
          <Field
            name="image"
            component="textarea"
            type="file"
            placeholder="Your content"
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="butto">Reset</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'categoryform' // a unique identifier for this form
})(CategoryForm)