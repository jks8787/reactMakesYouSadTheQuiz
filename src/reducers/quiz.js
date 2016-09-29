import { START_QUIZ } from '../actions/index.js';

const initialState = {
  started: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case START_QUIZ:
      return {
        started: true
      };
    default:
      return state;
  }
}
