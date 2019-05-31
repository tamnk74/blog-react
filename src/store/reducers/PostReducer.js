import { postConstants } from '../constants';

const initState = {
  total: 0,
  posts: [],
  post: {},
  page: 1,
  limit: 5
}
export function posts(state = initState, action) {
  switch (action.type) {
    case postConstants.POST_LIST:
      return {
        ...state,
        posts: action.posts
      };
    case postConstants.PAGE_INFO:
      return {
        ...state,
        total: action.count,
        page: action.page
      };
    case postConstants.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.post.id),
        total: state.total - 1
      };
    default:
      return state
  }
}