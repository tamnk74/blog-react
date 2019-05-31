import React from 'react'

const PostRecord = ({ post, removePost }) => {
  return (
    <tr>
      <td>
        <a href={'/posts/' + post.id}>{post.id}</a>
      </td>
      <td>{post.title}</td>
      <td>{post.content.slice(0, 100)}</td>
      <td>
        <a href={'/myposts/' + post.id + '/edit'} className="btn btn-primary">Edit</a>
        <button className="btn btn-danger" onClick={e => removePost(e, post)}>Delete</button>
      </td>
    </tr>
  )
}
const PostTable = ({ posts = [], removePost }) => {
  const postRows = posts.map(post => {
    return <PostRecord post={post} key={post.id} removePost={removePost} />
  })
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {postRows}
      </tbody>
    </table>
  )
}

export default PostTable