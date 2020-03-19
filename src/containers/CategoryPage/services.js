import axios from 'axios'
import queryString from 'query-string';
import { Deserializer as JSONAPIDeserializer } from 'jsonapi-serializer';
const jaDeserializer = new JSONAPIDeserializer();

export const categoryService = {
  getCategories,
};

async function getCategories(options) {
  const url = `http://localhost:3000/api/categories?${queryString.stringify(options)}`;
  const res = await axios.get(url);
  return jaDeserializer.deserialize(res.data);
}