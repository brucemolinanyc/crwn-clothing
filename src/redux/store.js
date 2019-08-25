import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // helps browser cache the store
import logger from 'redux-logger'; //console logs stuff for me

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor};