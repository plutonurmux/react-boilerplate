import React from 'react';

import Container from 'container/container';
import {switchRouteComponents} from './Routes';

export const App = () => (
  <Container>
      {switchRouteComponents()}
  </Container>
);

//reference
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://codepen.io/pshrmn/pen/YZXZqM
// https://reacttraining.com/react-router/web/guides/server-rendering
