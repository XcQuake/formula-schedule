import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(reducers, {}, applyMiddleware(thunk));
