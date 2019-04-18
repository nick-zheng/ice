import { combineReducers } from 'redux';
import projects from './projects';
import common from './common';

export default combineReducers({
  common,
  projects,
});
