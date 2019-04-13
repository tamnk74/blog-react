import React from 'react'
import { Link } from 'react-router-dom'

const PostTable = ({ posts }) => {

  const columns = ['no', 'title', 'content', 'view', 'action'];
  const postRows = posts.map((post, i) => (
    <tr key={post.id}>{columns.map((column, j) => {
      if (column === 'no') {
        return (<td key={j}>{i + 1}</td>);
      }
      if (column === 'action') {
        return (<td key={j}>
          <div className="btn-group">
            <Link to={'/admin/posts/' + post.id + '/edit'} className="btn btn-default btn-xs"><i className="glyphicon glyphicon-edit"></i></Link>
            <button className="btn btn-danger btn-xs"><i className="glyphicon glyphicon-trash"></i></button>
          </div>
        </td>);
      }
      if (column === 'title') {
        return (<td key={j}>
          <Link to={'/admin/posts/' + post.id} >{post.title}</Link>
        </td>);
      } 
      return (<td key= {j}>{ post[column]}</td>);
      })}</tr>
  ));

  const postHeader = columns.map((column, i) => (
        <td key={i}>{column}</td>
    ))
    
  return (
        <table className="table table-hover">
    <thead><tr>{postHeader}</tr></thead>
        <tbody>{postRows}</tbody>
        </table>
      )
}

export default PostTable