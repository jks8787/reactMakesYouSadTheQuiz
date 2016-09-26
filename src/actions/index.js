export const START_QUIZ = 'START_QUIZ';
export const CLIKED_YES = 'CLIKED_YES';
export const CLIKED_NO = 'CLIKED_NO';

export const startQuiz = () => ({
  type: START_QUIZ
});

export const clickedYes = () => ({
  type: CLIKED_YES
});

export const clickedNo = () => ({
  type: CLIKED_NO
});
