import React from 'react';
import ReactDOM from 'react-dom';
import Suggestion from './Suggestion';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import appReducer from './reducers';

it('renders a component', () => {
  const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
  const div = document.createElement('div');
  const data = {
    'suggestions': {
      'a': 'React makes you sad. Are you learning React by copying from the boilerplate projects? -Learning React by copying boilerplates is like learning to cook by eating food in fancy restaurants.',
      'b': 'While boilerplates are not a good way to learn the technologies they combine, they are useful to see how these technologies can be tied together *after* you’re comfortable with each of them independently',
      'c': 'Remove the Flux library. Get a good feel for structuring apps in vanilla React by reading “Thinking in React” in the official docs',
      'd': 'Consider adding a Flux library. It can help externalize the state shared between many components and update it consistently'
    }
  }
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(appReducer)}>
      <Suggestion
        suggestionId='a'
        suggestionData={data.suggestions}
      />
    </Provider>, div
  );
});
