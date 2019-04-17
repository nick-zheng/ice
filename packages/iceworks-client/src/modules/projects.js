export const ADD_PROJECT = 'iceworks/projects/ADD_PROJECT';
export const DELETE_PROJECT = 'iceworks/projects/DELETE_PROJECT';

export default function reducer(state, action) {
  if (!state) {
    return null;
  }

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

    default:
      return state;
  }
}
