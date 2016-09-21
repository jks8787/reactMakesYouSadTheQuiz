import data from '../Data.js';
import { CLIKED_YES, CLIKED_NO } from '../actions/index.js';

const initialState = {
  selected: '',
  currentQuestionId: 'a'
};

const findNextQuestion = (currentQuestionId, selected) => {
   const currentQuestion = data.questions[currentQuestionId.toString()];
  console.log('i am in the reducer - i am the next question', currentQuestion.steps[selected.toString()].nextQuestionId)
   return currentQuestion.steps[selected.toString()].nextQuestionId;
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case CLIKED_YES:
      return {
        selected: 'yes',
        currentQuestionId: findNextQuestion(state.currentQuestionId, 'yes')
      }
    case CLIKED_NO:
      return {
        selected: 'no',
        currentQuestionId: findNextQuestion(state.currentQuestionId, 'no')
      }
    default:
      return state
  }
}

export default question;
