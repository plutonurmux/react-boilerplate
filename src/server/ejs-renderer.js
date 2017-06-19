import React from 'react';
import ejs from 'ejs';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { App } from '../common/App';

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
    // const memoryHistory = createMemoryHistory(req.url);
    console.log(req.url);
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
         <App/>
      </StaticRouter>
    );

    const fullpage = ejsRender('full-page', {html});

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
