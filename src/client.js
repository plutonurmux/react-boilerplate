import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import { Client } from './client/Client';
import { initializeStore } from './common/Store';

const browserHistory = createHistory();
const store = initializeStore(browserHistory, window.__INITIAL_STATE__);

const render = (Component) => {
    ReactDOM.render((
        <AppContainer>
            <Component
              history={browserHistory}
              store={store}
            />
        </AppContainer>
    ), document.querySelector('[data-role="app"]'));
};

render(Client);

if (module.hot) {
    module.hot.accept('./client/Client', () => {
        const nextClient = require('./client/Client').Client;
        render(nextClient);
    });
}

//reference
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://codepen.io/pshrmn/pen/YZXZqM
// https://reacttraining.com/react-router/web/guides/server-rendering
