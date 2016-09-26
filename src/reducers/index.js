import { combineReducers } from 'redux';
import question from './question';
import quiz from './quiz';


const appReducer = combineReducers({
  quiz,
  question
});

export default appReducer;
