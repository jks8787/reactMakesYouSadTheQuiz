import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import appReducer from './reducers';

it('renders a component', () => {
  const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
  const div = document.createElement('div');
  const data = {
    'questions': {
        a: {
        'value': 'I am a yes or no question.. right?',
        'steps': {
          'yes': {
            'suggestion': null,
            'nextQuestion': 'questions.b'
          },
          'no': {
            'suggestion': 'suggestions.a',
            'nextQuestion': 'questions.b'
          }
        },
        'id': 'a'
      }
    },
    'suggestions': {
      'a': 'I am a suggestion that is text',
      'b': 'I am another one'
    }
  }
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(appReducer)}>
      <Question
        questionsData={data}
        currentQuestionId={'a'}
      />
    </Provider>, div
  );
});
