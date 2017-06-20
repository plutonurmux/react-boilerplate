import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';

import { App } from '../common/App';
import { initializeStore } from '../common/Store';

const browserHistory = createHistory();
const store = initializeStore(history, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ConnectedRouter>
  </Provider>
), document.querySelector('[data-role="app"]'));
