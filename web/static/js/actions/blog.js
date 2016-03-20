import { CALL_API } from 'redux-api-middleware';

export const fetchArticles = () => {
  return {
    [CALL_API]: {
      endpoint: '/api/posts',
      method: 'GET',
      types: [
        'REQUEST_FETCH_POSTS',
        {
          type: 'SUCCESS_FETCH_POSTS',
          payload: (action, state, res) => res.json().then(payload => payload),
        },
        'FAILURE_FETCH_POSTS',
      ],
    }
  }
}
