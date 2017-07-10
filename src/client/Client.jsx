import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import {App} from '../common/App';

export const Client = (props) => {
    const {history, store} = props;

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    );
};

Client.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};
