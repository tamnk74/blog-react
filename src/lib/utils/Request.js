import axios from "axios";

// You can use your own logic to set your local or production domain
const baseDomain = "http://localhost:4000/api";
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;
const token = localStorage.getItem('token');
const instance = axios.create({baseURL});
instance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : undefined;
export default instance;