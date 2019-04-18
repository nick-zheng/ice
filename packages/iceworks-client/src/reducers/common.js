import { PROJECTS_PAGE_UNLOADED } from '../constants/actionTypes';

const defaultState = {
  viewChangeCounter: 0,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case PROJECTS_PAGE_UNLOADED:
      return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
    default:
      return state;
  }
};
