import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import appReducer from './reducers';
import { mount } from 'enzyme';

it('renders a component', () => {
  const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
  const div = document.createElement('div');
  const data = {
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
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(appReducer)}>
      <Question
        question={data.a}
      />
    </Provider>, div
  );
});

it('does not render actions if there is no next question', () => {
  const data = {
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
  };
  const wrapper = mount(<Question question={data.a} />);

  expect(wrapper.find('button').length).toEqual(0);
});
