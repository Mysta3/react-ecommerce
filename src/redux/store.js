import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// SETUP REDUX DEV TOOLS USING CHROME EXTENSION
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
