import { SET_QUERY } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    query,
  };
};
