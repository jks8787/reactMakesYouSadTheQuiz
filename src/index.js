import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './index.css';

// adding redux and reduxThunk
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(appReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
