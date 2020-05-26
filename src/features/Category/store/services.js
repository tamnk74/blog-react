import request from '../../../utils/request';

export const getCategories = async (options) => {
  return request.get('/api/categories', options);
};