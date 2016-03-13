import { createAction } from 'redux-actions';

export const fetchArticles = () => {
  return dispatch => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(articles => {
        const action = createAction('FETCH_ARTICLES');
        dispatch(action({ articles }));
      })
      .catch(e => console.log('parsing failed', e));
  };
};
