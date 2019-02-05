import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from '../store';
import { render } from 'react-testing-library';

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {},
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
