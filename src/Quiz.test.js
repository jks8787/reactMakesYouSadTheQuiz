import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
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
            'nextQuestion': 'a'
          },
          'no': {
            'suggestion': null,
            'nextQuestion': 'a'
          }
        },
        'id': 'a'
      }
    }
  }
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(appReducer)}>
      <Quiz
        questionsData={data.questions}
      />
    </Provider>, div
  );
});
