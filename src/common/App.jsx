import React from 'react';
import Container from 'container/container';
import {switchRouteComponents} from './Routes';

export const App = () => {
    return (
      <Container>
          { switchRouteComponents() }
      </Container>
    );
};
