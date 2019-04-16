import React from 'react'
import { connect } from 'react-redux'

import { Control, Form, Errors, actions } from 'react-redux-form';

import { postActions } from '../../actions'

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.props.createPost(post);
  }

  render() {
    return (
      <Form model="newPost" onSubmit={(values) => this.handleSubmit(values)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Control.text model="newPost.title" className="form-control" validators={{
            required: (val) => !!val.length,
            minLength: (val) => val.length > 8,
          }} />
          <Errors
            model="newPost.title"
            messages={{
              required: 'Please enter an title.',
              minLength: 'The title is too short.',
            }}/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <Control.textarea model="newPost.content" className="form-control" validators={{
            required: (val) => !!val.length,
            minLength: (val) => val.length > 10,
          }} />
          <Errors
            model="newPost.content"
            messages={{
              required: 'Please enter an content.',
              minLength: 'The title is too short.',
            }}/>
        </div>
        <div>
          <button type="submit" className="btn btn-info">Submit</button>
          <button type="reset" className="btn btn-default">Reset</button>
        </div>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(postActions.createPost(post))
})

export default connect(null, mapDispatchToProps)(PostForm);;