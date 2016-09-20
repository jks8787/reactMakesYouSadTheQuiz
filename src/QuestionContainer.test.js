import React from 'react';
import ReactDOM from 'react-dom';
import QuestionContainer from './QuestionContainer';

it('renders a component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionContainer />, div);
});
