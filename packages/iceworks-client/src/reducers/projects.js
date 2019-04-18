import { PROJECTS_PAGE_LOADED } from '../constants/actionTypes';

export const ADD_PROJECT = 'iceworks/projects/ADD_PROJECT';
export const DELETE_PROJECT = 'iceworks/projects/DELETE_PROJECT';

const defaultState = {
  projects: [],
};
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      return {
        ...state,
        projects: state.projects.concat(action.project),
      };
    }

    case DELETE_PROJECT: {
      const projects = state.projects.slice();
      projects.splice(action.index, 1);
      return { ...state, projects };
    }

    case PROJECTS_PAGE_LOADED: {
      return {
        ...state,
        projects: action.payload.projects,
      };
    }

    default:
      return state;
  }
}
