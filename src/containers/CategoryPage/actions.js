import { categoryConstants } from './constants';
import { categoryService } from './services';

export const categoryActions = {
  getCategories,
};

function getCategories(options) {
  return async dispatch => {
    try {
      const categories = await categoryService.getCategories(options);
      dispatch({
        type: categoryConstants.LIST_CATEGORY,
        categories
      })
    } catch (error) {
      dispatch({ type: categoryConstants.ERROR, error });
    }
  }
}
