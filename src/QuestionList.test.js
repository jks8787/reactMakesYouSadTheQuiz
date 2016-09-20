import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList';

it('renders a component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionList />, div);
});
