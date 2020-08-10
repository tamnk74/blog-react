import request from '../../../utils/request';

export const getPosts = (options) => {
  return request.get('/api/posts', options);
};

export const getMyPosts = (options) => {
  return request.get('/api/me/posts', options);
};

export const getPost = (id) => {
  return request.get('/api/posts/' + id);
};

export const getPostBySlug = (slug) => {
  return request.get('/api/posts/slugs/' + slug);
};

export const create = (post) => {
  return request.post('/api/me/posts', post);
};

export const updatePost = (post) => {
  return request.patch(`/api/me/posts/${post.id}`, post);
};

export const removePost = (post) => {
  return request.delete(`/api/me/posts/${post.id}`, post);
};
