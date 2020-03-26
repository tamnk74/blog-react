import request from '../../utils/request';

export const getPosts = (options) => {
  return request.get('/api/posts', options);
};

export const getMyPosts = (options) => {
  return request.get('/me/posts', options);
};

export const getPost = (slug) => {
  return request.get('/api/posts/' + slug);
};

export const create = (post) => {
  return request.post('/me/posts', post);
};

export const update = (post) => {
  return request.patch(`/me/posts/${post.id}`, post);
};

export const remove = (post) => {
  return request.delete(`/me/posts/${post.id}`, post);
};