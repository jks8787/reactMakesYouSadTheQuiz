import { SHOW_SUGGESTION, HIDE_SUGGESTION } from '../actions/index.js';

const initialState = {
  show: false,
  suggestionId: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case HIDE_SUGGESTION:
      return {
        show: action.payload.show,
        suggestionId: action.payload.suggestionId
      }
    case SHOW_SUGGESTION:
      return {
        show: action.payload.show,
        suggestionId: action.payload.suggestionId
      }
    default:
      return state;
  }
}
