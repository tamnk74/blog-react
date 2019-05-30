import React, { Component } from 'react'
import PostForm from "__ROOT/components/posts/PostForm";

class PostCreate extends Component {
  constructor(props) {
    const id = this.props.match.params.id;
  }
  
  submit(values) {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-info">
            <div className="panel-heading">New Post</div>
            <div className="panel-body"></div>
            <PostForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    )
  }
}

export default PostCreate