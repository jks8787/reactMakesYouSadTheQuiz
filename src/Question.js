import React, { Component, PropTypes } from 'react';
import './Question.css';
import { connect } from 'react-redux';
import { clickedNo, clickedYes } from './actions/index.js';

class Question extends Component {
  static propTypes = {
    currentQuestionId: PropTypes.string,
    questionsData: PropTypes.object
  }

  static defaultProps = {
    currentQuestionId: 'a',
    questionData: {
      'questions': {
        'a': {
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
      },
      'suggestions': {
        'a': 'I am a suggestion that is text',
        'b': 'I am another one'
      }
    }
  }
}

  constructor(props) {
    super(props)
    this.onClickYes = this.onClickYes.bind(this)
    this.onClickNo = this.onClickNo.bind(this)
  }

  questionValue(id, data) {
    return data.questions[id].value;
  }

  suggestionValue(id, data, selectedVal) {
    let suggestionId = null;
    let suggestionVal = null;
    if (selectedVal !== '') {
      suggestionId = data.questions[id]['steps'][selectedVal].suggestionId;
      suggestionVal = (suggestionId !== null) ? data.suggestions[suggestionId] : null;
    }
    return suggestionVal;
  }

  onClickYes() {
    this.props.dispatch(clickedYes())
  }

  onClickNo() {
    this.props.dispatch(clickedNo())
  }

  render() {
    const data = this.props.questionsData;
    const id = this.props.state.question.currentQuestionId;
    const selectedVal =  this.props.state.question.selected;
    return (
      <div className="Question hero-body">
        <div className='question'>
          <div className='suggestion-wrap'>
          { this.suggestionValue(id, data, selectedVal) !== null ?
            <h5 className="title is-5">{this.suggestionValue(id, data, selectedVal)}</h5> :
            null
          }
          </div>
          <h3 className="title is-4">{this.questionValue(id, data)}</h3>
          <button className="button is-medium is-outlined" onClick={this.onClickNo}>
            No &#10007;
          </button>
          &nbsp;
          &nbsp;
          <button className="button is-medium is-outlined" onClick={this.onClickYes}>
            Yes &#10003;
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
     state
   }
};

let quest = connect(mapStateToProps)(Question);
export default quest;
