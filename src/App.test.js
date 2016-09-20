import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import appReducer from './reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(appReducer)}>
      <App />
    </Provider>, div
  );
});
