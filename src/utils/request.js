import axios from 'axios';
import queryString from 'query-string';
import { Deserializer as JSONAPIDeserializer } from 'jsonapi-serializer';
const jaDeserializer = new JSONAPIDeserializer();

class Request {
  constructor(api) {
    this.api = api || 'http://localhost:3000';
    this.token = null;
  }
  setApi(api) {
    this.api = api;
    return this;
  }
  setBearerToken(token) {
    this.token = token;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    return this;
  }

  async get(path, options){
    const response = await axios.get(`${this.api}${path}?${queryString.stringify(options)}`)
      .catch(error => {
        throw error.response ? error.response.data : error;
      });
    return jaDeserializer.deserialize(response.data);
  }

  async post(path, payload){
    const response = await axios.post(`${this.api}${path}`, payload)
      .catch(error => {
        throw error.response ? error.response.data : error;
      });
    return jaDeserializer.deserialize(response.data);
  }
  async patch(path, payload){
    const response = await axios.patch(`${this.api}${path}`, payload)
      .catch(error => {
        throw error.response ? error.response.data : error;
      });
    return response.data ? jaDeserializer.deserialize(response) : '';
  }
  async delete(path, payload){
    const response = await axios.delete(`${this.api}${path}`, payload)
      .catch(error => {
        throw error.response ? error.response.data : error;
      });
    return response.data ? jaDeserializer.deserialize(response) : '';
  }
}

const request = new Request();

export default request;