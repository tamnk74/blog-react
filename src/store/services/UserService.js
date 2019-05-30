import Request from '__ROOT/lib/utils/Request'

export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    return Request.post(`${config.apiUrl}/auth/login`, { username, password }).then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    return Request.post(`${config.apiUrl}/auth/register`, user)
    .then(result => {

    });
}
