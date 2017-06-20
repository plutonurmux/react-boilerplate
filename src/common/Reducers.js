import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const MainReducers = combineReducers({
    mock: {
        data: 'Mock Data Only'
    },
    routing: routerReducer
});

export default MainReducers;
