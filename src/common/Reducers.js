import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const MainReducers = combineReducers({
    mock: (state, action) => {
        return {
            ...state
        };
    },
    routing: routerReducer
});

export default MainReducers;
