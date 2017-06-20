import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import MainReducers from './Reducers';

export function initializeStore (history, initialState) {
    const middlewares = [routerMiddleware(history), thunkMiddleware];

    const store = createStore(
        MainReducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    return store;
}
