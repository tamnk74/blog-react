import request from '../../../utils/request';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const login = async ({username, password}) => {
  const email = validateEmail(username) ? username : false;
  const name = !email && username;

  const {token} = await request.post('/api/login', {
    email: email || undefined,
    name: name || undefined,
    password: password
  });
  localStorage.setItem('token', token);
  request.setBearerToken(token);
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