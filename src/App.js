import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Question from './Question.js';
import data from'./Data.js';
import { startQuiz } from './actions/index.js';

class App extends Component {
  constructor() {
    super(...arguments);

    this.onStartQuiz = this.onStartQuiz.bind(this);
  }

  onStartQuiz() {
    this.props.dispatch(startQuiz());
  }

  renderHeader() {
    if (this.props.state.quiz.started) { return; }

    return (
      <div>
        <h1 className='title is-1'>
          React makes you sad?
        </h1>
        <h2 className='title is-2'>
          the quiz! which is made with react-create-app and redux
        </h2>
        <div className='App-header'>
          <h3 className='title is-3'>
            content here comes from <a href="https://github.com/gaearon/react-makes-you-sad">react-makes-you-sad</a> flow chart
          </h3>
        </div>
        <div className='App-intro title is-3'>
          Here’s a quiz to make you happy again!
        </div>
      </div>
    );
  }

  renderQuiz() {
    if (this.props.state.quiz.started) {
      return (
        <div>
          <Question
            questionsData={data}
          />
        </div>
      );
    } else {
      return <button onClick={this.onStartQuiz}>Start Quiz!</button>;
    }
  }

  render() {
    return (
      <div className='App'>
        {this.renderHeader()}
        {this.renderQuiz()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

let app = connect(mapStateToProps)(App);

export default app;
