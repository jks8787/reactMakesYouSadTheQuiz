import React, { Component, PropTypes } from 'react';
import Question from './Question.js';
import './QuestionContainer.css';

export default class QuestionContainer extends Component {
  static propTypes = {
    currentQuestion: PropTypes.string,
    questions: PropTypes.object
  }

  static defaultProps = {
    currentQuestion: 'a',
    questions: {
      'a': {
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
  }

  render() {
    const { currentQuestion, questions } = this.props
    return (
      <div className="question-list-wrap">
        <Question question={questions[currentQuestion]}/>
      </div>
    );
  }
}
