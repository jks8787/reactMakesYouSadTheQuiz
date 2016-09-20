import React, { Component } from 'react';
import './App.css';
import QuestionList from './QuestionList.js';
import data from'./Data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> This is the h1</h1>
        <div className="App-header">
          <h2> This is the h2 </h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <QuestionList questions={data.questions} />
      </div>
    );
  }
}

export default App;
