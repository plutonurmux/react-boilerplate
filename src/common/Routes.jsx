import React from 'react';
import { Switch } from 'react-router-dom';

import routerRender from './RouteRender';
import Home from 'home/home';
import DemoOne from 'demo-one/demo-one';
import DemoTwo from 'demo-two/demo-two';

export const routes = [{
    component: Home,
    exact: true,
    path: '/'
}, {
    component: DemoOne,
    path: '/demoOne'
}, {
    component: DemoTwo,
    path: '/demoTwo'
}];

export const switchRouteComponents = () => (
    <Switch>
      {routerRender(routes)}
    </Switch>
);
