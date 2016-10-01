import { combineReducers } from 'redux';
import question from './question';
import quiz from './quiz';
import suggestion from './suggestion';


const appReducer = combineReducers({
  quiz,
  question,
  suggestion
});

export default appReducer;
