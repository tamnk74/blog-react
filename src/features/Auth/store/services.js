import request from 'utils/request';

export const login = async ({ email, password }) => {
  const { accessToken } = await request.post('/api/login', {
    email,
    password,
  });
  localStorage.setItem('token', accessToken);
  request.setBearerToken(accessToken);
  return request.get('/api/me');
};

export const loginGoogle = async ({ tokenId }) => {
  const { accessToken } = await request.post('/api/auth/google', {
    access_token: tokenId,
  });
  localStorage.setItem('token', accessToken);
  request.setBearerToken(accessToken);
  return request.get('/api/me');
};

export const getUserInfo = () => {
  return request.get('/api/me');
};

export const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export const register = (user) => {
  return request.post(`/auth/register`, user);
};
