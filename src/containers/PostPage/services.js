import axios from 'axios'
import { debug } from 'util';
import queryString from 'query-string';
import { Deserializer as JSONAPIDeserializer } from 'jsonapi-serializer';
const jaDeserializer = new JSONAPIDeserializer();

export const postService = {
  getPosts,
  getPost,
  getMyPosts,
  update,
  create,
  remove
};

async function getPosts(options) {
  const url = `http://localhost:3000/api/posts?${queryString.stringify(options)}`;
  const res = await axios.get(url);
  return jaDeserializer.deserialize(res.data);
}

async function getMyPosts(options) {
  const url = `http://localhost:3000/api/me/posts?${queryString.stringify(options)}`;
  const res = await axios.get(url);
  return jaDeserializer.deserialize(res.data);
}

async function getPost(slug) {
  const res = await axios.get('http://localhost:3000/api/posts/' + slug)
  return jaDeserializer.deserialize(res.data);
}
async function create(post) {
  const url = 'http://localhost:3000/api/me/posts';
  const res = await axios.post(url, post);
  return res.data;
};
async function update(post) {
  const url = `http://localhost:3000/api/me/posts/${post.id}`;
  const res = await axios.patch(url, post);
  return res.data;
};
async function remove(post) {
  const url = `http://localhost:3000/api/me/posts/${post.id}`;
  const res = await axios.delete(url, post);
  return res.data;
 };