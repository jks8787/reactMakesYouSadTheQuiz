import React, { Component, PropTypes } from 'react';
import './Question.css';

export default class Question extends Component{
  static propTypes = {
    question: PropTypes.object
  }

  static defaultProps = {
    question: {
      'value': 'I am a yes or no question.. right?',
      'steps': [
        'yes': {
          'suggestion': null,
          'nextQuestion': 'questions.b'
        },
        'no': {
          'suggestion': 'suggestions.a',
          'nextQuestion': 'questions.b'
        }
      ]
    }
  }

  render() {
    return (
      <div className='question-wrap'>
        <div className='question'>
          {this.props.question.value}
        </div>
      </div>
    );
  }
}
