import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from './middlewares/promise';
import reducer from './reducers';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware);
  }

  return applyMiddleware(promiseMiddleware, createLogger());
};

export default createStore(reducer, getMiddleware());
