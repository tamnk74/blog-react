import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, FastField, ErrorMessage } from 'formik';
import SelectField from '../../../../custom-fields/SelectField';
import * as Yup from 'yup';
import classNames from 'classnames';

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Your title is too short!')
    .max(127, 'Your title is too long!')
    .required('Please enter your title'),
  content: Yup.string()
    .min(300, 'Your content is too short!')
    .max(1000000, 'Your title is too long!')
    .required('Please enter your content'),
  category_id: Yup.string().required('Please select your category'),
});

PostForm.propTypes = {
  onSubmit: PropTypes.func,
  post: PropTypes.object,
  categories: PropTypes.array,
};

function PostForm({ onSubmit, post, categories }) {
  const initialValues = {
    title: post ? post.title : '',
    content: post ? post.content : '',
    category_id: post ? post.category_id : null,
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={PostSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { errors } = formikProps;
        return (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                className={classNames({
                  'form-control': true,
                  'is-invalid': errors.title,
                })}
              />
              <div className="invalid-feedback">
                <ErrorMessage name="title" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Field
                name="content"
                as="textarea"
                rows="16"
                cols="80"
                className={classNames({
                  'form-control': true,
                  'is-invalid': errors.content,
                })}
              />
              <div className="invalid-feedback">
                <ErrorMessage name="content" />
              </div>
            </div>
            <FastField
              name="category_id"
              component={SelectField}
              label="Category"
              placeholder="What's your post category?"
              options={categories}
            />
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PostForm;
