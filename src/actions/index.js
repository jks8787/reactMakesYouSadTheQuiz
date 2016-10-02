export const START_QUIZ = 'START_QUIZ';
export const CLIKED_YES = 'CLIKED_YES';
export const CLIKED_NO = 'CLIKED_NO';
export const HIDE_SUGGESTION = 'HIDE_SUGGESTION';
export const SHOW_SUGGESTION = 'SHOW_SUGGESTION';

export const startQuiz = () => ({
  type: START_QUIZ
});

export const clickedYes = () => ({
  type: CLIKED_YES
});

export const clickedNo = () => ({
  type: CLIKED_NO
});

export const hideSuggestion = () => ({
  type: HIDE_SUGGESTION,
  payload: {
    show: false,
    suggestionId: null
  }
});

export const showSuggestion = (id) => ({
  type: SHOW_SUGGESTION,
  payload: {
    show: true,
    suggestionId: id
  }
});
