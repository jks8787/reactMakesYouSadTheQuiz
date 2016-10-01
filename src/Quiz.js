import React, { Component, PropTypes } from 'react';
import './Quiz.css';
import { connect } from 'react-redux';
import { clickedNo, clickedYes, showSuggestion } from './actions/index.js';
import Question from './Question.js';

class Quiz extends Component {
  static propTypes = {
    questionsData: PropTypes.object
  }

  questionObject() {
    const data = this.props.questionsData;
    const id = this.props.state.question.currentQuestionId;
    return data[id];
  }

  renderQuestion() {
    return (
      <Question
        dispatch={this.props.dispatch}
        question={this.questionObject()}
        onClickYes={clickedYes}
        onClickNo={clickedNo}
        showSuggestion={showSuggestion}
      />
    )
  }

  render() {
    return (
      <div className="quiz hero-body">
        { this.renderQuestion() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
     state
   }
};

let quiz = connect(mapStateToProps)(Quiz);

export default quiz;
