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

  onClickYes = () => {
    console.log('YES');
    this.setState({
        selected : 'Yes'
    });
  }

  onClickNo = () => {
    console.log('No');
    this.setState({
        selected : 'No'
    });
  }


  render() {
    return (
      <div className='question-wrap'>
        <div className='question'>
          <p>{this.props.question.value}</p>
          <a className="button is-info" onClick={this.onClickNo}>No</a>
          <a className="button is-info"  onClick={this.onClickYes}>Yes</a>
        </div>
      </div>
    );
  }
}
