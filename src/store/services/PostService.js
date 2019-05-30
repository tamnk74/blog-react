import Request from '__ROOT/lib/utils/Request'

export function getPosts(type, page = 1, limit = 10) {
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
      const posts = res.data;
      return posts;
    }, error => {
      return Promise.reject(error);
    });
}

export function index() { };
export function create(post) {
  return Request.post('/posts', post)
    .then(res => {
      return res.data;
    }, error => {
      return Promise.reject(error);
    });
};
export function update() { };
export function remove() { };