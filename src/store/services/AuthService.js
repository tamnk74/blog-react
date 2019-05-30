import Request from '__ROOT/lib/utils/Request'

export const authService = {
  login,
  getUser,
  logout,
  register
};

/**
 * Login to system
 * 
 * @param {Object} payload login information
 * @return {*}
 */
function login(payload) {
  return Request.post('auth/login', payload)
    .then(res => {
      const { token, user } = res.data.data;
      localStorage.setItem('token', token);
      return user;
    }, error => {
      return Promise.reject(error);
    });
}

/**
 * Login to system
 * 
 * @param {Object} payload login information
 * @return {*}
 */
function getUser() {
  return Request.get('auth/userInfo')
    .then(res => {
      const user = res.data.data;
      return user;
    }, error => {
      return Promise.reject(error);
    });
}

/**
 * Logout from system
 */
function logout() {
  localStorage.removeItem('token');
}

/**
 * Register user
 * 
 * @param {Object} payload 
 */
function register(payload) {
  return Request.post('/auth/register', payload)
    .then();
}