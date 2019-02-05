import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { carDetailsReducer } from './reducers/carDetailsReducer';
import { carListReducer } from './reducers/carListReducer';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  carDetailsReducer,
  carListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
