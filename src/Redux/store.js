import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { StatsReducer } from './reducer';

const reducers = combineReducers({
  details: StatsReducer,
});

const middlewares = [thunk, logger];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
