import Request from '../lib/utils/Request'

export const postService = {
  getPosts,
  index,
  update,
  create,
  remove
};

function getPosts(type, page = 1, limit = 10) {
  let url = '';
  switch (type) {
    case 'latest':
      url = '/posts/latest?page=' + page + '&limit=' + limit;
      break;
    case 'trend':
      url = '/posts/trend?page=' + page + '&limit=' + limit;
      break;
    case 'top':
      url = '/posts/top?page=' + page + '&limit=' + limit;
      break;
    default:
      url = '/posts/?page=' + page + '&limit=' + limit;
  }

  return Request.get(url)
    .then(res => {
      if (res.data.error) {
        return Promise.reject(res.data.error.message);
      }
      const posts = res.data;
      return posts;
    }, error => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data.error);
      }
      return Promise.reject(error);
    });
}

function index() { };
function create(post) {
  const url = 'http://localhost:3000/api/posts/';
  return axios.post(url, post)
    .then(res => {
      if (res.data.error) {
        return Promise.reject(res.data.error.message);
      }
      const posts = res.data;
      return posts;
    }, error => {
      if (error.response) {
        return Promise.reject(error.response);
      }
      return Promise.reject(error);
    });
};
function update() { };
function remove() { };