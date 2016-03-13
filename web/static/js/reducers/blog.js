import { handleActions } from 'redux-actions';

const defaultState = {
  articles: []
};

export default handleActions({
  FETCH_ARTICLES: (state, action) => ({ articles: action.payload.articles })
}, defaultState);
