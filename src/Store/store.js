import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk for async action handling
import rootReducer from './index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Add thunk middleware here
);

export default store;
