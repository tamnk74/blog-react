import * as types from './constants';

export const getCategoriesAction = (options) => {
  return {
    type: types.GET_CATEGORIES,
    options
  }
};
