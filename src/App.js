import React, { Component } from 'react';
import './App.css';
import Question from './Question.js';
import data from'./Data.js';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='title is-1' > This is the h1</h1>
        <div className='App-header'>
          <h2 className='title is-2'> This is the h2 </h2>
        </div>
        <div className='App-intro'>
          this is the info in the inro
        </div>
        <Question
          questionsData={data}
        />
      </div>
    );
  }
};
