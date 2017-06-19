import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DemoOne from './demo-one';
import DemoOneChild from './demo-one-child';

const DemoOneRoute = () => (
  <Switch>
    <Route exact path='/demoone' component={DemoOne}/>
    <Route path='/demoone/:number' component={DemoOneChild}/>
  </Switch>
);

export default DemoOneRoute;
