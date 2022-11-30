import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { StatisticsReducer } from './reducer';

const store = configureStore({
  reducer: StatisticsReducer,
}, applyMiddleware(thunk, logger));

export default store;
