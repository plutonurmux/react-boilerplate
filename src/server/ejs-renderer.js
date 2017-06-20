import React from 'react';
import ejs from 'ejs';
import fs from 'fs';
import serialize from 'serialize-javascript';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';

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
    const memoryHistory = createMemoryHistory(req.url);

    const store = initializeStore(memoryHistory, {mock:{data:'value from server'}});
    const state = store.getState();

    const html = renderToString(
      <Provider store={store}>
         <ConnectedRouter history={memoryHistory}>
            <StaticRouter location={req.url} context={context}>
               <App/>
            </StaticRouter>
          </ConnectedRouter>
      </Provider>
    );

    const fullpage = ejsRender('full-page', {html, state: serialize(state, {isJSON: true, space: 0})});

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
