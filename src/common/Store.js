import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import MainReducers from './Reducers';

export function initializeStore (history, initialState) {

    const middlewares = [routerMiddleware(history), thunkMiddleware];

    const store = createStore(
        combineReducers({
            ...MainReducers,
            ...initialState,
            router: routerReducer
        }),
        applyMiddleware(middlewares)
    );

    return store;
}
