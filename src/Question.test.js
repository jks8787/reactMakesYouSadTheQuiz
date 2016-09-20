import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

it('renders a component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Question />, div);
});
