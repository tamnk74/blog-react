import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Your title is too short!')
    .max(127, 'Your title is too long!')
    .required('Please enter your title'),
  content: Yup.string()
    .min(100, 'Your content is too short!')
    .max(1000000, 'Your title is too long!')
    .required('Please enter your content'),
});

export default function PostForm({ onSubmit, post }) {
  const initialValues = post || {
    title: '',
    content: '',
  }
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={PostSchema}
      onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" className={
              classNames({
                'form-control': true,
                'is-invalid': errors.title,
              })
            } />
            <div className="invalid-feedback"><ErrorMessage name="title" /></div>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <Field name="content" as="textarea" rows="20" cols="80" className={
              classNames({
                'form-control': true,
                'is-invalid': errors.content,
              })
            } />
            <div className="invalid-feedback"><ErrorMessage name="content" /></div>
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
