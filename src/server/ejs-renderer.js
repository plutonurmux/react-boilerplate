import React from 'react';
import ejs from 'ejs';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { App } from '../common/App';
import { initializeStore } from '../common/Store';

const getTemplateString = (name) => {
    let templatePath = 'src/server/templates/'+name+'.ejs';
    return fs.readFileSync(templatePath).toString();
};

const ejsRender = (name , params = {}) => {
    let template = getTemplateString (name);
    return ejs.render(template , params);
};

const handleRender = (port, req, res) => {
    const context = {};
    const memoryHistory = createHistory();
    const history = syncHistoryWithStore(memoryHistory, store);

    const store = initializeStore(history, {mock:{data:'value from server'}});
    const state = store.getState();

    const html = renderToString(
      <Provider store={store}>
         <ConnectedRouter history={history}>
            <StaticRouter location={req.url} context={context}>
               <App/>
            </StaticRouter>
          </ConnectedRouter>
      </Provider>
    );

    const fullpage = ejsRender('full-page', {html, state});

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.statusCode = 200;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(fullpage);
    }
};

export default handleRender;

//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
