import { CALL_API } from 'redux-api-middleware';

export const fetchPosts = () => {
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

export const addPost = (payload) => {
  return {
    [CALL_API]: {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      endpoint: '/api/posts',
      method: 'POST',
      body: JSON.stringify(payload),
      types: [
        'REQUEST_ADD_POST',
        {
          type: 'SUCCESS_ADD_POST',
          payload: (action, state, res) => res.json().then(payload => payload),
        },
        'FAILURE_ADD_POST',
      ],
    }
  }
}
