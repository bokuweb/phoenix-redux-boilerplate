import { handleActions } from 'redux-actions';

const defaultState = {
  posts: [],
};

export default handleActions({
  SUCCESS_FETCH_POSTS: (state, action) => {
    return { posts: action.payload.data };
  },
}, defaultState);
