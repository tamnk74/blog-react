import axios from 'axios'

export const postService = {
    getPosts,
    index,
    update,
    create,
    remove
};

function getPosts(type) {
    let url = '';
    switch (type) {
        case 'latest':
            url = 'http://localhost:3000/api/posts/latest'; break;
        case 'trend':
            url = 'http://localhost:3000/api/posts/trend'; break;
        case 'hot':
            url = 'http://localhost:3000/api/posts/hot'; break;
        default :
            url = 'http://localhost:3000/api/posts/';
    }

    return axios.get(url)
        .then(res => {
            if (res.data.error) {
                return Promise.reject(res.data.error.message);
            }
            const posts = res.data;
            return posts;
        }, error => {
            return Promise.reject(error);
        });
}

function index() { };
function create() { };
function update() { };
function remove() { };