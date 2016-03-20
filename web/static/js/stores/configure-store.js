import { createStore,  applyMiddleware } from 'redux';
import reducers from '../reducers'
// import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger();
  return createStore(
      reducers,
      applyMiddleware(apiMiddleware, logger)
  );
}
