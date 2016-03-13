import { createStore,  applyMiddleware } from 'redux';
import reducers from '../reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger();
  return createStore(
      reducers,
      applyMiddleware(thunk, logger)
  );
}
