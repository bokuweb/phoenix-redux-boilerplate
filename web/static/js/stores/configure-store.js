import { createStore,  applyMiddleware } from 'redux';
import reducers from '../reducers'
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

export default () => {
  const logger = createLogger();
  return createStore(
      reducers,
      applyMiddleware(apiMiddleware, logger)
  );
};
