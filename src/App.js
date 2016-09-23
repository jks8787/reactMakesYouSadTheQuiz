import React, { Component } from 'react';
import './App.css';
import Question from './Question.js';
import data from'./Data.js';

export default class App extends Component {
  constructor() {
    super(...arguments);

    this.onStartQuiz = this.onStartQuiz.bind(this);

    this.state = { startQuiz: false };
  }

  onStartQuiz() {
    this.setState({ startQuiz: true });
  }

  renderHeader() {
    if (this.state.startQuiz) { return; }

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
    if (this.state.startQuiz) {
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
