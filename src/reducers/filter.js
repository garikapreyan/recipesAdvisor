import {
  ADD_HEALTH_LABEL,
  ADD_DIET_LABEL,
  REMOVE_FILTER_LABEL,
  LOGOUT_USER
} from '../constants';

const initialState = { type: '', labels: [] };
export default (state = initialState, action) => {
  let temporaryState;

  switch (action.type) {
    case ADD_HEALTH_LABEL:
      if (state.type === 'health') {
        temporaryState = { ...state };
        state.labels = [];
        state.labels.push(...temporaryState.labels, action.label);
      } else {
        state.type = 'health';
        state.labels = [];
        state.labels.push(action.label);
      }
      return { ...state };

    case ADD_DIET_LABEL:
      if (state.type === 'diet') {
        temporaryState = { ...state };
        state.labels = [];
        state.labels.push(...temporaryState.labels, action.label);
      } else {
        state.type = 'diet';
        state.labels = [];
        state.labels.push(action.label);
      }
      return { ...state };

    case REMOVE_FILTER_LABEL:
      temporaryState = { ...state };
      state.labels = [];
      temporaryState.labels.splice(
        temporaryState.labels.indexOf(action.label),
        1
      );
      state.labels.push(temporaryState.labels);

      return { ...state };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
