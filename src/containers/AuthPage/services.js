import axios from 'axios'
import { Deserializer as JSONAPIDeserializer } from 'jsonapi-serializer';
const jaDeserializer = new JSONAPIDeserializer();

export const authService = {
  login,
  logout,
  register
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function login(username, password) {
  const email = validateEmail(username) ? username : false;
  const name = !email && username;

  const res = await axios.post('http://localhost:3000/api/login', {
    email: email || undefined,
    name: name || undefined,
    password: password
  });
  const {token} = await jaDeserializer.deserialize(res.data);
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    localStorage.setItem('token', token);
  }
  else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }

  return token;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/auth/register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  console.log('Response1: ', response);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log('Response2: ', data);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}