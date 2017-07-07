import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/app';
import thunkMiddleware from 'redux-thunk';

const appStore = createStore(
  reducer,
  applyMiddleware( thunkMiddleware )
);
export default appStore;