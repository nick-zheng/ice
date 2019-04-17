import { createStore } from 'redux';
import reducer from './modules/reducer';

export default function makeStore() {
  return createStore(reducer, {
    projects: [
    ],
  });
}
