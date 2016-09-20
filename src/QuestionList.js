import React, { Component, PropTypes } from 'react';
import Question from './Question.js';
import './QuestionList.css';

export default class QuestionList extends Component {
  static propTypes = {
    questions: PropTypes.object
  }

  static defaultProps = {
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
    return (
      <div className="question-list-wrap">
        <Question question={this.props.questions.a}/>
      </div>
    );
  }
}
