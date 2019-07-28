import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
