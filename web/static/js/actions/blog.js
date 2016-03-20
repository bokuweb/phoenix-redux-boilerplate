import { CALL_API } from 'redux-api-middleware';

export const fetch = () => {
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

export const post = (payload) => {
  console.log(payload)
  return {
    [CALL_API]: {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      endpoint: '/api/posts',
      method: 'POST',
      body: payload,
      types: [
        'REQUEST_POST',
        'SUCCESS_POST',
        'FAILURE_POST',
      ],
    }
  }
}
