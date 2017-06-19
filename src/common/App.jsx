import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from 'container/container';
import Home from 'home/home';
import DemoOneRoute from 'demo-one/demo-one-route';
import DemoTwo from 'demo-two/demo-two';

export const App = () => (
  <Container>
      <Switch>
          <Route component={Home} exact path={'/'} />
          <Route component={DemoOneRoute} path={'/demoOne'} />
          <Route component={DemoTwo} path={'/demoTwo'} />
      </Switch>
  </Container>
);


//reference
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://codepen.io/pshrmn/pen/YZXZqM
