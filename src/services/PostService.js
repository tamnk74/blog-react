import axios from 'axios'

export const postService = {
    getPosts,
    index,
    update,
    create,
    remove
};

function getPosts(type, page = 1, limit = 10) {
    let url = '';
    switch (type) {
        case 'latest':
            url = 'http://localhost:3000/api/posts/latest?page=' + page + '&limit=' + limit; 
            break;
        case 'trend':
            url = 'http://localhost:3000/api/posts/trend?page=' + page + '&limit=' + limit; 
            break;
        case 'top':
            url = 'http://localhost:3000/api/posts/top?page=' + page + '&limit=' + limit; 
            break;
        default :
            url = 'http://localhost:3000/api/posts/?page=' + page + '&limit=' + limit;
    }

    return axios.get(url)
        .then(res => {
            if (res.data.error) {
                return Promise.reject(res.data.error.message);
            }
            const posts = res.data;
            return posts;
        }, error => {
            if (error.response && error.response.data) {
                return Promise.reject(error.response.data.error);
            }
            return Promise.reject(error);
        });
}

function index() { };
function create() { };
function update() { };
function remove() { };