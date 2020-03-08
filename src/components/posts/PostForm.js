import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postActions } from '../../actions'
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

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.props.createPost(post);
  }

  render() {
    const initialValues = {
      title: '',
      content: '',
    }
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={PostSchema}
        onSubmit={(values) => this.handleSubmit(values)}>
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
              <Field name="content" as="textarea" className={
                classNames({
                  'form-control': true,
                  'is-invalid': errors.content,
                })
              }/>
              <div className="invalid-feedback"><ErrorMessage name="content" /></div>
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
          </Form>
        )}
      </Formik>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(postActions.createPost(post))
})

export default connect(null, mapDispatchToProps)(PostForm);;