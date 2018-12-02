import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from '../reducers';

const middleware = [promise(), thunk];

export default createStore(reducer, applyMiddleware(...middleware));