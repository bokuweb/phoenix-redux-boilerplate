import { handleActions } from 'redux-actions';

const defaultState = {
  posts: [],
};

export default handleActions({
  SUCCESS_FETCH_POSTS: (state, action) => {
    return { posts: action.payload.data.reverse() };
  },
  SUCCESS_ADD_POST: (state, action) => {
    console.log('aaa')
    return { posts: [action.payload.data].concat(state.posts) };
  },
}, defaultState);
