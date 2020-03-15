import axios from 'axios'

export const authService = {
    login,
    logout,
    register
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function login(username, password) {
    const email = validateEmail(username) ? username : false;
    const name = !email && username;

    return axios.post('http://localhost:3000/api/login', {
        email: email || undefined,
        name: name || undefined,
        password: password
    })
    .then(res => {
        if (res.data.error) {
            return Promise.reject(res.data.error);
        }
        const {token, user} = res.data.data;
        if(token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            localStorage.setItem('jwt', token);
            localStorage.setItem('user', JSON.stringify(user));
        }
        else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
        }

        return user;
    }, error => {
        return Promise.reject(error);
    });
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