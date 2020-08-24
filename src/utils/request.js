import axios from 'axios';
import queryString from 'query-string';
import { Deserializer as JSONAPIDeserializer } from 'jsonapi-serializer';
const jaDeserializer = new JSONAPIDeserializer({
  keyForAttribute: 'camelCase',
});

const request = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.setToken = (token) => {
  request.defaults.headers['x-access-token'] = token;
  window.localStorage.setItem('token', token);
};

request.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return jaDeserializer.deserialize(response.data);
    }

    return response;
  },
  (error) => {
    const {
      response: { status },
    } = error;
    if (status === 401 && window.localStorage.getItem('refresh_token')) {
      window.localStorage.removeItem('token');
      return request
        .post('/api/refresh-token', {
          refresh_token: window.localStorage.getItem('refresh_token'),
        })
        .then((data) => {
          const { accessToken } = data;
          const { config } = error;
          window.localStorage.setItem('token', accessToken);
          return request(config);
        })
        .catch(() => {
          window.localStorage.removeItem('refresh_token');
          throw error;
        });
    }
    // Todo: Handle errors
    throw error;
  },
);

export default request;
