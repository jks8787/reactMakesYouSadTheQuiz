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
    return (
      <header className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <span className="is-clearfix is-pulled-right">
              <iframe src="https://ghbtns.com/github-btn.html?user=jks8787&repo=reactMakesYouSadTheQuiz&type=star&count=true" frameborder="0" scrolling="0" width="75px" height="20px"></iframe>
            </span>
            <h1 className='title'>
              React makes you sad?
            </h1>
            <h2 className="subtitle">
              Here’s a quiz to make you happy again!
            </h2>
          </div>
        </div>
      </header>
    );
  }

  renderFooter() {
    return (
      <footer className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <p className="title is-6">
              Content comes from <a href="https://github.com/gaearon/react-makes-you-sad" target="_blank">react-makes-you-sad</a> flow chart.
            </p>
            <p className="subtitle is-6">
              This experience is brought by <a href="https://github.com/jks8787" target="_blank">Janice K.N. Smith</a>. &copy; 2016.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  renderQuiz() {
    if (this.props.state.quiz.started) {
      return (
        <section className="container">
          <Question
            questionsData={data}
          />
        </section>
      );
    } else {
      return (
        <section className="container">
          <div className="hero-body">
            <button className="button is-primary is-large" onClick={this.onStartQuiz}>
              Lets do this! &#8658;
            </button>
          </div>
        </section>
      );
    }
  }

  render() {
    return (
      <div className='App'>
        {this.renderHeader()}
        {this.renderQuiz()}
        {this.renderFooter()}
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
