import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (routes) => (
    <Switch>
      {
          routes.map((route, index) => (
            <Route key={index} {...route} />
          ))
      }
    </Switch>
);
