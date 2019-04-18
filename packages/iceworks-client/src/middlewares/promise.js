import {
  ASYNC_START,
  ASYNC_END,
} from '../constants/actionTypes';

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const promiseMiddleware = store => next => (action) => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    const currentView = store.getState().viewChangeCounter;
    const { skipTracking } = action;

    action.payload.then(
      (res) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        console.log('RESULT', res);
        store.dispatch({ type: ASYNC_END, promise: res });
        store.dispatch({ ...action, playload: res });
      },
      (error) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        console.log('ERROR', error);
        const payload = error.response.body;
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: payload });
        }
        store.dispatch({ ...action, error: true, payload });
      },
    );

    return;
  }

  next(action);
};

export default promiseMiddleware;
