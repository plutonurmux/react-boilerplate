import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DemoMain from '../pages/demo-main/demo-main';
import Home from '../pages/home/home';
import DemoOneRoute from '../pages/demo-one/demo-one-route';
import DemoTwo from '../pages/demo-two/demo-two';

export const App = () => (
  <DemoMain>
    <Switch>
        <Route component={Home} exact path={'/'} />
        <Route component={DemoOneRoute} path={'/demoOne'} />
        <Route component={DemoTwo} path={'/demoTwo'} />
    </Switch>
  </DemoMain>
);


//reference
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://codepen.io/pshrmn/pen/YZXZqM
