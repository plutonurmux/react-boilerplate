import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import { Client } from './client/Client';
import { initializeStore } from './common/Store';

const browserHistory = createHistory();
const store = initializeStore(browserHistory, window.__INITIAL_STATE__);

const render = () => {
    ReactDOM.render((
        <AppContainer>
            <Client
              history={browserHistory}
              store={store}
            />
        </AppContainer>
    ), document.querySelector('[data-role="app"]'));
};

render();

if (module.hot) {
    module.hot.accept('./client/Client.jsx', () => { render(); });
}

//reference
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://codepen.io/pshrmn/pen/YZXZqM
// https://reacttraining.com/react-router/web/guides/server-rendering
