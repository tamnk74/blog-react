import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostBySlug } from './../../store/actions';
import moment from 'moment';
import { markdown } from 'markdown';
import './Detail.scss';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.getPostBySlug(this.props.match.params.slug);
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading</div>;
    }
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
          </div>
          <div
            className="card-body"
            dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.content) }}
          ></div>
          <div className="card-footer">
            <ul className="list-inline">
              <li>
                <i className="fa fa-user"></i> By:{' '}
                {post.user && (
                  <Link to={`/users/${post.user.id}/posts`}>
                    {post.user.fullName}
                  </Link>
                )}
              </li>
              <li>
                | <i className="fa fa-calendar"></i>{' '}
                {moment(post.createdAt).format('DD-MMM-YYYY')}
              </li>
              <li>
                | <i className="fa fa-comments"></i>{' '}
                <a href="#"> {post.view} viewer</a>
              </li>
              {post.category && (
                <li>
                  | Categories:{' '}
                  <Link to={`/categories/${post.category.id}/posts`}>
                    {post.category.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

DetailPage.propTypes = {
  getPostBySlug: PropTypes.func,
  post: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};

const mapDispatchToProps = (dispatch) => ({
  getPostBySlug: (post) => dispatch(getPostBySlug(post)),
});

const mapStateToProps = (state) => ({
  post: state.posts.post,
});

const connectedPostDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailPage);
export { connectedPostDetail as DetailPage };
